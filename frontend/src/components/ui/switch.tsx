"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Switch as SwitchPrimitive } from "radix-ui"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer group/switch relative inline-flex h-7 w-[62px] shrink-0 cursor-pointer items-center rounded-none",
        "border-2 border-border bg-[linear-gradient(to_right,var(--primary)_0_50%,var(--control-inactive)_50%_100%)]",
        "ore-bevel-inactive outline-none",
        "focus-visible:ore-outline",
        "disabled:cursor-not-allowed disabled:bg-[var(--disabled-surface)] disabled:border-[var(--disabled-border)] disabled:shadow-none",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none absolute left-[-2px] top-1/2 z-10 block size-8 -translate-y-1/2 border-2 border-border bg-secondary",
          "ore-bevel-secondary",
          "transition-transform duration-100",
          "group-hover/switch:bg-[var(--secondary-hover)]",
          "data-[state=checked]:translate-x-[30px]",
          "data-[state=unchecked]:translate-x-0",
          "group-disabled/switch:border-[var(--disabled-border)] group-disabled/switch:bg-[var(--disabled-surface)] group-disabled/switch:shadow-[inset_0_-4px_0_var(--disabled-bevel)]",
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }