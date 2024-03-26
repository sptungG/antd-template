import { LinkProps, default as NextLink } from "next/link";
import { ForwardRefRenderFunction, ReactNode, forwardRef } from "react";

import useTranslation from "@/hooks/useTranslation";

export type TLinkProps = LinkProps & {
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
};

const Link: ForwardRefRenderFunction<HTMLAnchorElement, TLinkProps> = (
  { className, children, onClick, href = "/", style, ...props },
  forwardedRef,
) => {
  const { locale } = useTranslation();
  return (
    <NextLink {...props} legacyBehavior href={href} passHref locale={locale}>
      <a
        className={className}
        onClick={onClick}
        ref={forwardedRef}
        style={{ textDecoration: "none", ...style }}
      >
        {children}
      </a>
    </NextLink>
  );
};
export default forwardRef(Link);
