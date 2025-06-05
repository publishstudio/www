import { cn } from "@/utils/cn";
import type { LinkProps } from "next/link";
import Link from "next/link";

interface LinkButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  href: LinkProps["href"];
  target?: React.HTMLAttributeAnchorTarget;
}

/**
 * Renders a button that acts as a link.
 *
 * @param children - The content of the button.
 * @param className - Additional CSS class names for the button.
 * @param href - The URL to navigate to when the button is clicked.
 * @param target - The target attribute for the link.
 * @param props - Additional props to pass to the button component.
 * @returns The rendered link button component.
 */
export function LinkButton({
  children,
  className,
  href,
  target = "_blank",
  ...props
}: Readonly<LinkButtonProps>) {
  return (
    <button
      type="button"
      className={cn(
        "h-max p-0 text-primary underline-offset-4 hover:underline",
        className
      )}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      {...props}
    >
      <Link href={href} target={target}>
        {children}
      </Link>
    </button>
  );
}
