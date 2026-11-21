import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const badgeVariants = cva(
  "inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border-2 border-border px-2 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:ore-outline aria-invalid:border-destructive [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-[var(--surface-light)] text-foreground ore-bevel-inactive",
        secondary: "bg-secondary text-secondary-foreground ore-bevel-secondary",
        destructive: "bg-destructive text-destructive-foreground ore-bevel-destructive",
        outline: "border-border bg-transparent text-foreground",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-[var(--surface-light)]",
        link: "border-transparent bg-transparent text-[var(--primary-tint)] underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }