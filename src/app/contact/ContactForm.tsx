"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircleIcon, CheckCircleIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { siteConfig } from "@/config/site";
import { isBlank, isValidEmail, isValidIndianMobile } from "@/lib/validation";

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; reason: "not-configured" | "request-failed" };

const INITIAL_FORM: ContactFormData = { name: "", email: "", mobile: "", subject: "", message: "" };

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const mobileId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
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

    if (isBlank(formData.mobile)) next.mobile = "Enter your mobile number.";
    else if (!isValidIndianMobile(formData.mobile)) next.mobile = "Enter a valid 10-digit mobile number.";

    if (isBlank(formData.subject)) next.subject = "Enter a subject.";
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

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Contact request failed");

      setSubmitState({ status: "success" });
      setFormData(INITIAL_FORM);
    } catch {
      setSubmitState({ status: "error", reason: "request-failed" });
    }
  }

  if (submitState.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand-border bg-brand-surface p-8 text-center shadow-card">
        <CheckCircleIcon className="size-12 text-brand-primary" aria-hidden="true" />
        <h2 className="text-2xl">Message Sent</h2>
        <p className="text-brand-muted">Thanks for reaching out — our team will get back to you soon.</p>
        <Button variant="outline" onClick={() => setSubmitState({ status: "idle" })}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {submitState.status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-brand-danger/30 bg-brand-danger-bg p-4 text-sm text-brand-danger"
        >
          <AlertCircleIcon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p>
            {submitState.reason === "not-configured"
              ? `The contact form isn't connected to a messaging endpoint yet. Please email us directly at ${siteConfig.contactEmail}.`
              : `Something went wrong sending your message. Please try again, or email us at ${siteConfig.contactEmail}.`}
          </p>
        </div>
      )}

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
        id={mobileId}
        type="tel"
        label="Mobile"
        required
        autoComplete="tel"
        hint="10-digit Indian mobile number"
        value={formData.mobile}
        onChange={(event) => updateField("mobile", event.target.value)}
        error={errors.mobile}
      />

      <Input
        id={subjectId}
        label="Subject"
        required
        value={formData.subject}
        onChange={(event) => updateField("subject", event.target.value)}
        error={errors.subject}
      />

      <Input
        id={messageId}
        multiline
        rows={5}
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
        {submitState.status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
