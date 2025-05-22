import styles from "./DropDown.module.css";
import clsx from "clsx";

export const DropDown = ({
  label,
  options,
  value,
  onChange,
  className,
  variant = "",
  ...props
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <label className={styles.label}>
      {label}
      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={clsx([classes.select, className])}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
