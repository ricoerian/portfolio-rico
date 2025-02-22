import clsx from "clsx";

import { ReactNode, JSX } from "react";

const variants = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base",
  small: "text-sm text-gray-600 dark:text-gray-400",
};

interface TypographyProps {
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
}

const Typography = ({
  variant = "p",
  className = "",
  children,
}: TypographyProps) => {
  const baseStyles = "text-gray-900 dark:text-gray-100";

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
