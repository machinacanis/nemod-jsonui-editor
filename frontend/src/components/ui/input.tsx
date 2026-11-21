import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-none border-2 border-border bg-[var(--surface)] px-2.5 py-2 text-[15px] font-semibold transition-colors outline-none",
        "ore-inset placeholder:text-[var(--text-dimmer)] placeholder:opacity-100",
        "selection:bg-primary selection:text-primary-foreground",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "focus-visible:ore-focus-input",
        "disabled:pointer-events-none disabled:border-[var(--disabled-border)] disabled:bg-[var(--disabled-surface)] disabled:text-[var(--disabled-text)] disabled:shadow-[inset_0_4px_0_var(--disabled-bevel)]",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  )
}

export { Input }