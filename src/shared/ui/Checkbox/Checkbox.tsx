"use client";

import { useState, forwardRef, ChangeEvent, useEffect } from "react";
import cn from "classnames";

import styles from "./Checkboxs.module.css";
import { CheckboxProps } from "./Chechkbox.props";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, errorMessage, checked, onChange, ...props }: CheckboxProps, ref) => {
    const [isChecked, setChecked] = useState(false);
    const change = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    };

    useEffect(() => {
      setChecked(!!checked);
    }, [checked]);

    return (
      <div className={cn(className, styles.container)}>
        {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        <input
          type="checkbox"
          ref={ref}
          className={styles.checkbox}
          id={id}
          checked={isChecked}
          onChange={(e) => change(e)}
          {...props}
        ></input>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
