"use client";

import * as React from "react";
import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { Input, type inputStyles } from "./input";
import { Field, FieldProps } from "./feild";

const textFieldStyles = tv({
  base: "flex flex-col gap-2 items-start",
});

type TextFieldProps = TextFieldRootProps &
  Omit<FieldProps, "children"> &
  VariantProps<typeof inputStyles> & {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    isLoading?: boolean;
    loaderPosition?: "left" | "right";
    placeholder?: string;
  };

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      size,
      placeholder,
      label,
      description,
      errorMessage,
      leftSection,
      rightSection,
      isLoading,
      loaderPosition = "right",
      withAsterisk,
      contextualHelp,
      ...props
    },
    ref
  ) => {
    return (
      <TextFieldRoot className={className} {...props}>
        {({ isRequired }) => (
          <Field
            label={label}
            description={description}
            errorMessage={errorMessage}
            isRequired={isRequired}
            withAsterisk={withAsterisk}
            contextualHelp={contextualHelp}
          >
            <Input
              size={size}
              leftSection={leftSection}
              rightSection={rightSection}
              isLoading={isLoading}
              loaderPosition={loaderPosition}
              ref={ref}
              placeholder={placeholder}
              disabled={props.isDisabled}
              aria-invalid={props.isInvalid}
            />
          </Field>
        )}
      </TextFieldRoot>
    );
  }
);
TextField.displayName = "TextField";

type TextFieldRootProps = Omit<AriaTextFieldProps, "className"> & {
  className?: string;
};
const TextFieldRoot = React.forwardRef<
  React.ElementRef<typeof AriaTextField>,
  TextFieldRootProps
>(({ className, ...props }, ref) => {
  return (
    <AriaTextField
      ref={ref}
      className={textFieldStyles({ className })}
      {...props}
    />
  );
});
TextFieldRoot.displayName = "TextFieldRoot";

export type { TextFieldProps, TextFieldRootProps };
export { TextField, TextFieldRoot };
