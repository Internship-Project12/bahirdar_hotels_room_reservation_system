import { cn } from "../utils/cn";

/* eslint-disable react/prop-types */
function SpinnerMini({ color = "text-white", className = "" }) {
  return (
    <div
      className={cn(
        `text-surface inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${color}`,
        className,
      )}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default SpinnerMini;
