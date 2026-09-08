import { siteConfig } from "@/data/siteConfig";

type Props = {
  variant?: "light" | "ghost" | "dark" | "line" | "gold";
  className?: string;
  children?: string;
  href?: string;
};

export function CtaLink({ variant = "dark", className = "", children, href }: Props) {
  return (
    <a className={`btn btn--${variant} ${className}`} href={href}>
      {children}
    </a>
  );
}

export function LineLink({
  variant = "line",
  className = "",
  short = false,
}: {
  variant?: Props["variant"];
  className?: string;
  short?: boolean;
}) {
  const { lineUrl, lineCta, lineCtaShort } = siteConfig.contact;
  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {short ? lineCtaShort : lineCta}
    </a>
  );
}
