import { forwardRef } from "react";

import { cn } from "@itsrakesh/utils";

interface MagicBorderBtnProps extends React.HTMLAttributes<HTMLButtonElement> {}

const MagicBorderBtn = forwardRef<HTMLButtonElement, MagicBorderBtnProps>(
  ({ className, children, onClick, ...props }, ref) => {
    return (
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        className={cn(
          className,
          "relative h-9 inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        )}
        {...props}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {children}
        </span>
      </button>
    );
  },
);
MagicBorderBtn.displayName = "MagicBorderBtn";

export { MagicBorderBtn };
