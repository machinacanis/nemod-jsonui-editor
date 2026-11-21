import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-none border-2 border-border bg-[var(--surface)] px-2.5 py-2 pb-1 text-[15px] font-semibold transition-colors outline-none",
        "ore-inset placeholder:text-[var(--text-dimmer)] placeholder:opacity-100",
        "focus-visible:ore-focus-input",
        "disabled:cursor-not-allowed disabled:border-[var(--disabled-border)] disabled:bg-[var(--disabled-surface)] disabled:text-[var(--disabled-text)] disabled:shadow-[inset_0_4px_0_var(--disabled-bevel)]",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }