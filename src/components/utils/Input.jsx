import { forwardRef, useId as Id } from "react";

const Input = () =>
  forwardRef(
    ({ type = "text", placeholder, label, className, ...props }, ref) => {
      return (
        <div>
          {label && (
            <label className="inline-block mb-1 pl-1" htmlFor={Id}>
              {label}
            </label>
          )}
          {
            <input
              type={type}
              className={className}
              placeholder={placeholder}
              ref={ref}
              id={Id}
              {...props}
            />
          }
        </div>
      );
    }
  );

export default Input;
