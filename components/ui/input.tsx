import * as React from "react";

type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  inputSize?: InputSize;
  leftSlot?: React.ReactNode;
}

function classNames(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

const sizeStyles: Record<
  InputSize,
  { wrapper: string; input: string; icon: string }
> = {
  sm: { wrapper: "h-9", input: "text-sm pl-9", icon: "left-3 size-4" },
  md: { wrapper: "h-11", input: "text-base pl-10", icon: "left-3.5 size-5" },
  lg: { wrapper: "h-16", input: "text-lg pl-14", icon: "left-5 size-6" },
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = "md", leftSlot, className, ...props }, ref) => {
    const styles = sizeStyles[inputSize];
    return (
      <div
        className={classNames(
          "relative w-full rounded-pill border border-border/70 bg-surface/80 text-text shadow-inner",
          styles.wrapper
        )}
      >
        {leftSlot ? (
          <div
            className={classNames(
              "absolute top-1/2 -translate-y-1/2 text-white/80",
              styles.icon
            )}
          >
            {leftSlot}
          </div>
        ) : null}
        <input
          ref={ref}
          className={classNames(
            "w-full h-full rounded-pill bg-transparent placeholder:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70",
            styles.input,
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
