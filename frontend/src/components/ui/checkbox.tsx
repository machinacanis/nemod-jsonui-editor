"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-6 shrink-0 cursor-pointer rounded-none border-2 border-border outline-none transition-colors",
        "bg-[var(--control-inactive)] ore-bevel-inactive",
        "hover:bg-[var(--secondary-hover)]",
        "active:bg-[var(--surface-light)]",
        "data-[state=checked]:bg-primary",
        "data-[state=checked]:hover:bg-[#316d20]",
        "data-[state=checked]:active:bg-[#295a1b]",
        "focus-visible:ore-outline",
        "disabled:cursor-not-allowed disabled:bg-[var(--disabled-surface)] disabled:border-[var(--disabled-border)] disabled:shadow-none",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-primary-foreground transition-none"
      >
        <CheckIcon className="size-4" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }