import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "bg-white text-navy ring-2 ring-inset ring-navy hover:bg-mist",
  white: "bg-white text-navy hover:bg-sky",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  trailing,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: IconName;
  trailing?: IconName;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl px-7 text-[17px] font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {icon && <Icon name={icon} />}
      {children}
      {trailing && <Icon name={trailing} />}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${className}`}>
      <p className={`text-[13px] font-semibold tracking-[0.1em] uppercase ${light ? "text-brand-soft" : "text-brand"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-[30px] leading-[1.12] font-extrabold tracking-tight text-balance sm:text-[44px] ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[17px] leading-relaxed sm:text-[19px] ${light ? "text-[#d5deec]" : "text-ink"}`}>{intro}</p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 lg:px-0 ${className}`}>{children}</div>;
}
