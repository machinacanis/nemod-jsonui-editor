import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-none text-sm font-semibold whitespace-nowrap transition-all duration-75 outline-none focus-visible:ore-outline disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-2 border-border bg-primary text-primary-foreground ore-bevel-primary hover:bg-[var(--primary-hover)] active:translate-y-1 active:shadow-none",
        secondary:
          "border-2 border-border bg-secondary text-secondary-foreground ore-bevel-secondary hover:bg-[var(--secondary-hover)] active:translate-y-1 active:shadow-none",
        destructive:
          "border-2 border-border bg-destructive text-destructive-foreground ore-bevel-destructive hover:bg-[var(--destructive-hover)] active:translate-y-1 active:shadow-none",
        outline:
          "border-2 border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:translate-y-0.5",
        ghost: "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-[#6cc349] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 px-6 has-[>svg]:px-4",
        icon: "size-10",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }