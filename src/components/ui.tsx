import type { ButtonHTMLAttributes, ReactNode, TextareaHTMLAttributes, InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "quiet" | "danger";
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium",
        "transition duration-150 ease-out active:scale-95 disabled:pointer-events-none disabled:opacity-40",
        variant === "primary" && "bg-accent text-ink hover:opacity-90",
        variant === "ghost" && "border border-line bg-transparent text-fg hover:bg-elevated",
        variant === "quiet" && "bg-elevated text-fg hover:bg-surface",
        variant === "danger" && "border border-line bg-transparent text-alert hover:bg-elevated",
        className,
      )}
      {...props}
    />
  );
}

export function Panel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("rounded-xl border border-line bg-surface p-4", className)}>
      {children}
    </section>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted">{label}</span>
      {children}
      {hint ? <span className="mt-2 block text-sm leading-snug text-muted">{hint}</span> : null}
    </label>
  );
}

export const fieldClass =
  "min-h-11 w-full rounded-md border border-line bg-bg px-3 text-base text-fg outline-none placeholder:text-muted";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, props.className)} {...props} />;
}

export function Area(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClass, "min-h-24 resize-y py-3 leading-normal", props.className)}
      {...props}
    />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs tracking-wide text-muted">{children}</p>;
}
