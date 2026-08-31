"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircleIcon, CheckCircleIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { itServices } from "@/config/itServices";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { isBlank, isValidEmail, isValidPhone } from "@/lib/validation";

interface ContactModalProps {
  onClose: () => void;
  /** Pre-selects "Service Interested In" when opened from a specific IT service card. */
  presetService?: string | null;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; reason: "not-configured" | "request-failed" };

const GENERAL_ENQUIRY = "General Enquiry";
const SERVICE_OPTIONS = [GENERAL_ENQUIRY, ...itServices.map((service) => service.name)];

function buildInitialForm(presetService?: string | null): ContactFormData {
  return {
    name: "",
    email: "",
    phone: "",
    company: "",
    service: presetService && SERVICE_OPTIONS.includes(presetService) ? presetService : GENERAL_ENQUIRY,
    message: "",
  };
}

export function ContactModal({ onClose, presetService }: ContactModalProps) {
  const titleId = useId();
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const companyId = useId();
  const serviceId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState<ContactFormData>(() => buildInitialForm(presetService));
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  function updateField(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (isBlank(formData.name)) next.name = "Enter your name.";

    if (isBlank(formData.email)) next.email = "Enter your email address.";
    else if (!isValidEmail(formData.email)) next.email = "Enter a valid email address.";

    if (!isBlank(formData.phone) && !isValidPhone(formData.phone)) {
      next.phone = "Enter a valid 10-digit phone number.";
    }

    if (isBlank(formData.message)) next.message = "Enter a message.";

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL;
    if (!endpoint) {
      setSubmitState({ status: "error", reason: "not-configured" });
      return;
    }

    setSubmitState({ status: "loading" });

    // Some free form-backend services (e.g. Web3Forms) identify the
    // destination inbox via a public access key included in the body
    // rather than the endpoint URL itself (e.g. Formspree, which doesn't
    // need this). Harmless extra field when the service doesn't use it.
    const accessKey = process.env.NEXT_PUBLIC_CONTACT_ACCESS_KEY;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(accessKey ? { ...formData, access_key: accessKey } : formData),
      });

      if (!response.ok) throw new Error("Enquiry request failed");

      setSubmitState({ status: "success" });
    } catch {
      setSubmitState({ status: "error", reason: "request-failed" });
    }
  }

  if (submitState.status === "success") {
    return (
      <Modal onClose={onClose} labelledBy={titleId}>
        <div className="flex flex-col items-center gap-4 pt-2 text-center">
          <CheckCircleIcon className="size-12 text-brand-primary" aria-hidden="true" />
          <h2 id={titleId} className="text-2xl">
            Enquiry Sent
          </h2>
          <p className="text-brand-muted">Thanks for reaching out — our team will get back to you soon.</p>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={onClose} labelledBy={titleId} panelClassName="max-w-lg">
      <div className="mb-6">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-primary">Let&apos;s Talk</span>
        <h2 id={titleId} className="mt-1 text-2xl">
          Discuss Your Project
        </h2>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {submitState.status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-brand-danger/30 bg-brand-danger-bg p-4 text-sm text-brand-danger"
          >
            <AlertCircleIcon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>
              {submitState.reason === "not-configured"
                ? `The enquiry form isn't connected to an endpoint yet. Please email us directly at ${siteConfig.contactEmail}.`
                : `Something went wrong sending your enquiry. Please try again, or email us at ${siteConfig.contactEmail}.`}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input
            id={nameId}
            label="Name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            error={errors.name}
          />
          <Input
            id={emailId}
            type="email"
            label="Email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            error={errors.email}
          />
          <Input
            id={phoneId}
            type="tel"
            label="Phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            error={errors.phone}
          />
          <Input
            id={companyId}
            label="Company"
            autoComplete="organization"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={serviceId} className="text-sm font-medium text-brand-text">
            Service Interested In
          </label>
          <select
            id={serviceId}
            value={formData.service}
            onChange={(event) => updateField("service", event.target.value)}
            className={cn(
              "w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-3 text-brand-text transition-colors duration-150 ease-out",
              "focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary",
            )}
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Input
          id={messageId}
          multiline
          rows={4}
          label="Message"
          required
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          error={errors.message}
        />

        <Button
          type="submit"
          size="lg"
          isLoading={submitState.status === "loading"}
          fullWidth
          className="sm:w-auto sm:self-start"
        >
          {submitState.status === "loading" ? "Sending..." : "Send Enquiry"}
        </Button>
      </form>
    </Modal>
  );
}
