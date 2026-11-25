import { cn } from "@/lib/utils";

export function SuvilanLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm p-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M4.5 10.5L12 4.5L19.5 10.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V10.5Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="9.25" cy="13.5" r="1.4" fill="currentColor" />
          <circle cx="14.75" cy="13.5" r="1.4" fill="currentColor" />

          <path
            d="M9.5 16.2C10.2 16.8 11.05 17.1 12 17.1C12.95 17.1 13.8 16.8 14.5 16.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-xl font-semibold tracking-tight text-foreground">
        Suvilan
      </span>
    </span>
  );
}
