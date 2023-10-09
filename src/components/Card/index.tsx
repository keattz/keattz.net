import classNames from "classnames";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={classNames("rounded-lg", className)}>{children}</div>;
}
