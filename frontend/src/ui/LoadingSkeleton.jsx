import { cn } from "../utils/cn";

function LoadingSkeleton({ className }) {
  return (
    <div role="status" className="animate-pulse">
      <div
        className={cn("mb-4 rounded bg-gray-50 dark:bg-gray-200", className)}
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
