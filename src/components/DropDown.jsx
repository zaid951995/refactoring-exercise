import classes from "./DropDown.module.css";
import clsx from "clsx";

export function DropDown({
  label,
  options,
  value,
  onChange,
  variant = "",
  ...props
}) {
  return (
    <label className={classes.label}>
      {label}
      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={clsx([classes[variant]])}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
