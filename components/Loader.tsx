import { cn } from "@/lib/utils";
import { Spinner } from "./ui/spinner";

export default function Loader ({
  className,
  spinnerClassName,
  ...props
}: React.ComponentProps<"div"> & {
  spinnerClassName?: string;
}) {
  return (
    <div
      className={cn("w-full flex items-center justify-center", className)}
      {...props}
    >
      <Spinner className={cn("size-15 text-primary", spinnerClassName)} />
    </div>
  );
}
