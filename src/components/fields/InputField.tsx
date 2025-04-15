// Custom components

import { Label } from "../ui/label";
import { Field } from 'formik'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "auth" | "form";
  state?: string
  label: string;
}

function InputField(props: Props) {

  const { label, id, className, name, type = "text", placeholder, variant, state, disabled } =
    props;

  return (
    <div className={`${className}`}>
      <Label
        htmlFor={id}
        className={`text-sm text-slate-950 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </Label>
      <Field
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
          disabled === true
            ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
            : state === "error"
            ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
            ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : "border-gray-200 dark:!border-white/10 dark:text-white"
        }`}
      />
    </div>
  );
}

export default InputField;
