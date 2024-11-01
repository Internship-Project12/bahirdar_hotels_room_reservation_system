import { cn } from "../utils/cn";

function LoadingSkeleton({ className }) {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div
        className={cn(
          "mb-4 h-2.5 w-48 rounded bg-gray-50 dark:bg-gray-200",
          className,
        )}
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSkeleton;

/*
<div className="mx-auto flex h-[200px] w-full flex-col">
  <LoadingSkeleton className="h-36 w-96" />
  <LoadingSkeleton className="h-36 w-96" />
  <LoadingSkeleton className="h-36 w-96" />
</div>
*/
