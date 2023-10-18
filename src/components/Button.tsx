import { JSX, JSXElement } from "solid-js";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    text,
    children,
    type = "button",
    className = "bg-blue-600 text-white",
    ...rest
  } = props;

  return (
    <>
      <button
        type={type}
        class={`inline-flex gap-3 px-5 py-3 text-base cursor-pointer transition-all duration-300 rounded-md ${className}`}
        {...rest}
      >
        {text || children}
      </button>
    </>
  );
};

export default Button;
