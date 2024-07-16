"use client";

import { AsteriskIcon } from "lucide-react";
import * as React from "react";
import {
  Label as RACLabel,
  Text as RACText,
  FieldError as RACFieldError,
  FieldErrorContext as RACFieldErrorContext,
  type TextProps as RACTextProps,
  type LabelProps as RACLabelProps,
  type FieldErrorProps as RACFieldErrorProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const fieldStyles = tv({
  slots: {
    root: "flex flex-col gap-2 items-start",
    label:
      "text-sm inline-flex items-center gap-px font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:text-muted [&_svg]:size-3",
    description: "text-xs text-muted",
    fieldError: "text-xs text-destructive",
  },
});

type LabelProps = RACLabelProps & {
  isRequired?: boolean;
  withAsterisk?: boolean;
};
const Label = ({
  className,
  children,
  isRequired,
  withAsterisk,
  ...props
}: LabelProps) => {
  const { label } = fieldStyles();
  return (
    <RACLabel className={label({ className })} {...props}>
      {children}
      {isRequired && <span aria-hidden>{withAsterisk ? <></> : <></>}</span>}
      {withAsterisk && " \u200b"}
      {withAsterisk && <AsteriskIcon />}
    </RACLabel>
  );
};

type DescriptionProps = RACTextProps;
const Description = ({ className, ...props }: DescriptionProps) => {
  const { description } = fieldStyles();
  return (
    <RACText
      {...props}
      slot="description"
      className={description({ className })}
    />
  );
};

type FieldErrorProps = Omit<RACFieldErrorProps, "className"> & {
  className?: string;
};
const FieldError = ({ className, ...props }: FieldErrorProps) => {
  const { fieldError } = fieldStyles();
  return <RACFieldError {...props} className={fieldError({ className })} />;
};

interface FieldProps {
  label?: LabelProps["children"];
  isRequired?: LabelProps["isRequired"];
  withAsterisk?: LabelProps["withAsterisk"];
  contextualHelp?: React.ReactNode;
  children?: React.ReactNode;
  errorMessage?: FieldErrorProps["children"];
  description?: DescriptionProps["children"];
  descriptionPosition?: "top" | "bottom";
}
const Field = (props: FieldProps) => {
  const {
    children,
    label,
    isRequired,
    withAsterisk,
    contextualHelp,
    errorMessage,
    description,
    descriptionPosition = "top",
  } = props;

  return (
    <>
      <span className="flex items-center gap-2">
        <Label isRequired={isRequired} withAsterisk={withAsterisk}>
          {label}
        </Label>
        {contextualHelp}
      </span>
      {descriptionPosition === "top" && description && (
        <Description>{description}</Description>
      )}
      {children}
      {errorMessage ? (
        <FieldError>{errorMessage}</FieldError>
      ) : (
        descriptionPosition === "bottom" &&
        description && <Description>{description}</Description>
      )}
    </>
  );
};
Field.displayName = "Field";

export type { LabelProps, DescriptionProps, FieldErrorProps, FieldProps };
export { Label, Description, FieldError, Field, fieldStyles };
