import classes from "./DropDown.module.css";
import clsx from "clsx";

export function DropDown({
  label,
  options,
  value,
  onChange,
  className,
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
        className={clsx([classes.select, className])}
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
