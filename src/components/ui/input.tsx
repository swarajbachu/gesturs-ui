"use client";

import * as React from "react";
import { mergeRefs } from "@react-aria/utils";
import { useControlledState } from "@react-stately/utils";
import { chain } from "react-aria";
import {
  Input as RACInput,
  Group as RACGroup,
  TextArea as RACTextArea,
  type TextAreaProps as RACTextAreaProps,
  type InputProps as RACInputProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { LoaderIcon } from "lucide-react";
import { focusInput } from "@/lib/aria-utils";
import { cn } from "@/lib/utils";

const inputStyles = tv({
  slots: {
    root: [
      focusInput(),
      "inline-flex justify-start items-center gap-2 px-2 transition-colors rounded-[7px] w-full shadow-sm cursor-text  text-base sm:text-sm [&_svg]:size-4 [&_svg]:fill-muted-foreground peer w-full h-full bg-transparent font-sans font-normal  disabled:border-0 transition-all placeholder-shown:border  border focus-within:border-2 text-sm border-gray-200 focus-within:border-gray-700",
      "disabled:cursor-not-allowed  disabled:bg-muted disabled:text-muted",
      "invalid:border-red-300 focus-within:invalid:border-red-300 disabled:opacity-50",
    ],
    input: [
      "bg-transparent disabled:cursor-not-allowed outline-none w-full h-full text-foreground placeholder:text-muted-foreground disabled:text-disabled ",
    ],
  },
  variants: {
    size: {
      sm: { root: "h-9" },
      md: { root: "h-10" },
      lg: { root: "h-12" },
      xl: { root: "h-14" },
    },
    multiline: {
      true: {
        root: "h-auto flex-col items-stretch p-2",
        input: "min-h-14 resize-none overflow-auto",
      },
      false: {
        input: "flex-1",
      },
    },
  },
  defaultVariants: {
    size: "md",
    multiline: false,
  },
});

interface TextAreaInputProps extends Omit<RACTextAreaProps, "className"> {
  className?: string;
}
const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ className, onChange, rows = 1, ...props }, forwardedRef) => {
    const { input } = inputStyles({ multiline: true });
    const [inputValue, setInputValue] = useControlledState(
      props.value,
      props.defaultValue ?? "",
      () => {
        // Do nothing
      }
    );
    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const onHeightChange = React.useCallback(() => {
      if (inputRef.current) {
        const input = inputRef.current;
        const prevAlignment = input.style.alignSelf;
        const prevOverflow = input.style.overflow;
        const isFirefox = "MozAppearance" in input.style;
        if (!isFirefox) {
          input.style.overflow = "hidden";
        }
        input.style.alignSelf = "start";
        input.style.height = "auto";
        input.style.height = `${
          input.scrollHeight + (input.offsetHeight - input.clientHeight)
        }px`;
        input.style.overflow = prevOverflow;
        input.style.alignSelf = prevAlignment;
      }
    }, [inputRef]);

    React.useLayoutEffect(() => {
      if (inputRef.current) {
        onHeightChange();
      }
    }, [onHeightChange, inputValue, inputRef]);

    return (
      <RACTextArea
        ref={mergeRefs(inputRef, forwardedRef)}
        className={input({ className })}
        onChange={chain(onChange, setInputValue)}
        rows={rows}
        {...props}
      />
    );
  }
);
TextAreaInput.displayName = "TextAreaInput";

interface SimpleInputProps extends Omit<RACInputProps, "className" | "size"> {
  className?: string;
}
const SimpleInput = React.forwardRef<HTMLInputElement, SimpleInputProps>(
  ({ className, ...props }, ref) => {
    const { input } = inputStyles();
    return <RACInput ref={ref} className={input({ className })} {...props} />;
  }
);

SimpleInput.displayName = "Input";

interface InputProps
  extends Omit<SimpleInputProps, "className">,
    VariantProps<typeof inputStyles> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  isLoading?: boolean;
  loaderPosition?: "left" | "right";
  className?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      leftSection,
      rightSection,
      isLoading,
      loaderPosition,
      size,
      multiline,
      ...props
    },
    ref
  ) => {
    const { root } = inputStyles({ size, multiline });
    const isDisabled = props.disabled;
    const isInvalid =
      props["aria-invalid"] === true ||
      props["aria-invalid"] === "true" ||
      props["aria-invalid"] === "grammar" ||
      props["aria-invalid"] === "spelling";

    console.log(isInvalid, isDisabled, "invalid");

    return (
      <RACGroup
        role="presentation"
        className={cn(root({ className }), className)}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
      >
        {isLoading && loaderPosition === "left" ? (
          <LoaderIcon className="animate-spin" />
        ) : (
          leftSection
        )}
        <SimpleInput ref={ref} {...props} />
        {isLoading && loaderPosition === "right" ? (
          <LoaderIcon className="animate-spin" />
        ) : (
          rightSection
        )}
      </RACGroup>
    );
  }
);

Input.displayName = "InputRoot";

export type { SimpleInputProps, InputProps, TextAreaInputProps };
export { SimpleInput, TextAreaInput, Input, inputStyles };
