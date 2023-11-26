import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2  justify-center rounded-full h-[22px] focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-primary-blue text-white ",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border-primary-blue text-primary-blue",
        secondaryCircle:
          "border-transparent bg-primary-blue  text-white w-[22px]",
        open: "bg-light-success border-none rounded-none px-4 text-[#13DEB9] font-medium",
        refunded:
          "bg-[#FEF5E5] border-none rounded-none px-4 text-[#FFAE1F] font-medium",
        progress:
          "bg-[#EBF3FE] border-none rounded-none px-4 text-info font-medium",
        cancel:
          "bg-[#FBF2EF] border-none rounded-none px-4 text-[#FA896B] font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
