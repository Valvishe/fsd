"use client";

import React, { useId } from "react";
import TextareaAutosize from "react-textarea-autosize";
import cn from "classnames";

import { TextAreaProps } from "@/shared/ui/Textarea/TextArea.props";

import styles from "./TextArea.module.css";

export const TextArea = (props: TextAreaProps) => {
  const { label, id, className, value, errorMessage, onChange, ...otherProps } = props;

  const newTextareaID = useId();
  const textareaID = id || newTextareaID;

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={textareaID} className={styles.label}>
          {label}
        </label>
      )}
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}

      <TextareaAutosize
        className={cn(styles.textarea, className, { [styles.error]: errorMessage })}
        defaultValue={value}
        id={textareaID}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};

TextArea.displayName = "TextArea";
