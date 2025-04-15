function Card(props: {
  variant?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { className, children, ...rest } = props;
  return (
    <div
      className={`relative flex flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:bg-slate-950 dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
