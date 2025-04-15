import { ErrorMessage } from 'formik';

interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  className?: string;
  name: string;
}

function MessageError({ className, name, ...rest }: Props) {
  return (
    <div className={`text-red-500 text-sm ${className}`} {...rest}>
      <ErrorMessage name={name} component="div" />
    </div>
  )
}

export default MessageError
