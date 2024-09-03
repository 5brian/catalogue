import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, target }) => (
  <Link href={href} passHref legacyBehavior>
    <a target={target}>{children}</a>
  </Link>
);

export default LinkButton;
