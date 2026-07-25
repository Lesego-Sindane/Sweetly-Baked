import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn("focus-ring min-h-28 w-full rounded-md border bg-warm px-3 py-3 text-sm text-chocolate placeholder:text-chocolate/45", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";
