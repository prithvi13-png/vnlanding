import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SharedProps {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  required?: boolean;
  containerClassName?: string;
  className?: string;
}

type SingleLineProps = SharedProps & {
  multiline?: false;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className">;

type MultiLineProps = SharedProps & {
  multiline: true;
  rows?: number;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className">;

export type InputProps = SingleLineProps | MultiLineProps;

export function Input(props: InputProps) {
  const { label, id, error, hint, required, containerClassName, className } = props;

  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  const fieldClasses = cn(
    "w-full rounded-lg border bg-brand-surface px-4 py-3 text-brand-text placeholder:text-brand-muted transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary",
    error ? "border-brand-danger" : "border-brand-border",
    className,
  );

  let field: ReactNode;

  if (props.multiline) {
    const { label: _label, id: _id, error: _error, hint: _hint, required: _required, containerClassName: _cc, className: _cn, multiline: _multiline, rows, ...rest } = props;
    field = (
      <textarea
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={cn(fieldClasses, "resize-y")}
        rows={rows ?? 5}
        {...rest}
      />
    );
  } else {
    const { label: _label, id: _id, error: _error, hint: _hint, required: _required, containerClassName: _cc, className: _cn, multiline: _multiline, ...rest } = props;
    field = (
      <input
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={fieldClasses}
        {...rest}
      />
    );
  }

  return (
    <div className={cn("flex flex-col gap-1.5", containerClassName)}>
      <label htmlFor={id} className="text-sm font-medium text-brand-text">
        {label}
        {required && (
          <span className="text-brand-danger" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>

      {field}

      {hint && !error && (
        <p id={hintId} className="text-xs text-brand-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs font-medium text-brand-danger">
          {error}
        </p>
      )}
    </div>
  );
}
