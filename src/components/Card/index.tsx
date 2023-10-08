import classNames from "classnames";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
}) {
  return <div className={classNames("rounded-lg", className)}>{children}</div>;
}
