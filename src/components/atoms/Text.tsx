export const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <p className={className}>{children}</p>;
