"use client";

import { useId, useState, type FormEvent } from "react";
import { SwapIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { buildBusSearchUrl, todayDateString } from "@/lib/busBooking";
import { isBlank, isPastDate } from "@/lib/validation";

interface FormErrors {
  from?: string;
  to?: string;
  date?: string;
}

export function BusSearchForm() {
  const fromId = useId();
  const toId = useId();
  const dateId = useId();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSwap() {
    setFrom(to);
    setTo(from);
  }

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (isBlank(from)) {
      next.from = "Enter a departure city.";
    }

    if (isBlank(to)) {
      next.to = "Enter a destination city.";
    }

    if (!next.from && !next.to && from.trim().toLowerCase() === to.trim().toLowerCase()) {
      next.to = "Destination must be different from departure.";
    }

    if (isBlank(date)) {
      next.date = "Select a journey date.";
    } else if (isPastDate(date)) {
      next.date = "Journey date can't be in the past.";
    }

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    window.location.href = buildBusSearchUrl({ from: from.trim(), to: to.trim(), date });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
        <Input
          id={fromId}
          label="From"
          placeholder="Departure city"
          autoComplete="off"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          error={errors.from}
          required
        />

        <button
          type="button"
          onClick={handleSwap}
          aria-label="Swap departure and destination"
          className="mx-auto flex size-11 shrink-0 items-center justify-center self-center rounded-full border border-brand-border text-brand-primary transition-colors duration-150 ease-out hover:border-brand-primary hover:bg-brand-primary-light sm:mt-7"
        >
          <SwapIcon className="size-5" />
        </button>

        <Input
          id={toId}
          label="To"
          placeholder="Destination city"
          autoComplete="off"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          error={errors.to}
          required
        />
      </div>

      <Input
        id={dateId}
        type="date"
        label="Journey Date"
        min={todayDateString()}
        value={date}
        onChange={(event) => setDate(event.target.value)}
        error={errors.date}
        required
      />

      <Button type="submit" size="lg" fullWidth className="sm:w-auto sm:self-start">
        Search Buses
      </Button>
    </form>
  );
}
