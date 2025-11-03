import * as React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 7.75A2.75 2.75 0 0 1 5.75 5h12.5A2.75 2.75 0 0 1 21 7.75v8.5A2.75 2.75 0 0 1 18.25 19H5.75A2.75 2.75 0 0 1 3 16.25v-8.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

export interface SubscribeBarProps {
  className?: string;
  placeholder?: string;
}

export function SubscribeBar({
  className,
  placeholder = "email",
}: SubscribeBarProps) {
  return (
    <div className={`flex w-full items-center gap-6 ${className ?? ""}`}>
      <div className="flex-1">
        <Input
          inputSize="lg"
          placeholder={placeholder}
          leftSlot={<MailIcon className="text-white/70" />}
        />
      </div>
      <Button size="lg" className="rounded-pill min-w-44">
        Subscribe
      </Button>
    </div>
  );
}

export default SubscribeBar;
