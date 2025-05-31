"use client";

import * as React from "react";
import { setHours, setMinutes, getHours, getMinutes } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { Calendar as CalendarIcon } from "lucide-react";
import * as chrono from "chrono-node";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import type { DayPickerSingleProps } from "react-day-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Suggestion = {
  label: string;
  value: string;
};

const defaultSuggestions: Suggestion[] = [
  { label: "Tomorrow", value: "tomorrow" },
  { label: "In 2 days", value: "in 2 days" },
  { label: "In 3 days", value: "in 3 days" },
  { label: "Next week", value: "in 1 week" },
  { label: "Next month", value: "in 1 month" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const convertTo12Hour = (hour24: number) => {
  if (hour24 === 0) return 12; // 00:00 -> 12 AM
  if (hour24 > 12) return hour24 - 12;
  return hour24;
};

const convertTo24Hour = (hour12: number, isPM: boolean) => {
  if (hour12 === 12) {
    return isPM ? 12 : 0;
  }
  return isPM ? hour12 + 12 : hour12;
};

interface NaturalDatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  customSuggestions?: Suggestion[];
  dayPickerProps?: Omit<
    DayPickerSingleProps,
    "mode" | "selected" | "onSelect" | "initialFocus"
  >;
  timezone?: string; // Optional timezone, defaults to user's local timezone
}

export function NaturalDatePicker({
  value,
  onChange,
  placeholder = "Pick a date and time...",
  className,
  customSuggestions,
  dayPickerProps,
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone, // Default to user's timezone
}: NaturalDatePickerProps) {
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const [inputValue, setInputValue] = React.useState(
    value ? formatInTimeZone(value, timezone, "PPP p") : ""
  );
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    value
  );

  // Initialize time states
  const initialHour24 = value ? getHours(value) : 0;
  const initialMinute = value ? getMinutes(value) : 0;
  const [hour12, setHour12] = React.useState(convertTo12Hour(initialHour24));
  const [minute, setMinute] = React.useState(initialMinute);
  const [isPM, setIsPM] = React.useState(initialHour24 >= 12);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const currentSuggestions = customSuggestions || defaultSuggestions;

  React.useEffect(() => {
    if (value) {
      const newHour24 = getHours(value);
      setInputValue(formatInTimeZone(value, timezone, "PPP p"));
      setSelectedDate(value);
      setHour12(convertTo12Hour(newHour24));
      setMinute(getMinutes(value));
      setIsPM(newHour24 >= 12);
    } else {
      setInputValue("");
      setSelectedDate(undefined);
      setHour12(12);
      setMinute(0);
      setIsPM(false);
    }
  }, [value, timezone]);

  const updateDateTime = (
    newDate: Date,
    newHour12: number,
    newMinute: number,
    newIsPM: boolean
  ) => {
    const hour24 = convertTo24Hour(newHour12, newIsPM);
    let updatedDate = setHours(newDate, hour24);
    updatedDate = setMinutes(updatedDate, newMinute);

    // Create a date object with timezone information
    const dateWithTimezone = new Date(
      updatedDate.toLocaleString("en-US", { timeZone: timezone })
    );
    Object.defineProperty(dateWithTimezone, "timezone", {
      value: timezone,
      enumerable: true,
    });

    setSelectedDate(updatedDate);
    setInputValue(formatInTimeZone(dateWithTimezone, timezone, "PPP p"));
    onChange?.(dateWithTimezone);
  };

  const handleDateChange = (date: Date | undefined) => {
    if (!date) return;
    updateDateTime(date, hour12, minute, isPM);
    setCalendarOpen(false);
  };

  const handleHourChange = (newHour: number) => {
    // Clamp between 1 and 12
    const clampedHour = Math.max(1, Math.min(12, newHour));
    setHour12(clampedHour);
    if (selectedDate) {
      updateDateTime(selectedDate, clampedHour, minute, isPM);
    }
  };

  const handleMinuteChange = (newMinute: number) => {
    const clampedMinute = Math.max(0, Math.min(59, newMinute));
    setMinute(clampedMinute);
    if (selectedDate) {
      updateDateTime(selectedDate, hour12, clampedMinute, isPM);
    }
  };

  const handlePeriodChange = (newPeriod: string) => {
    const newIsPM = newPeriod === "PM";
    setIsPM(newIsPM);
    if (selectedDate) {
      updateDateTime(selectedDate, hour12, minute, newIsPM);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === "") {
      onChange?.(undefined);
      setSelectedDate(undefined);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const parsedDate = chrono.parseDate(inputValue, { timezone });
      if (parsedDate) {
        const newHour24 = getHours(parsedDate);
        const newMinute = getMinutes(parsedDate);
        setHour12(convertTo12Hour(newHour24));
        setMinute(newMinute);
        setIsPM(newHour24 >= 12);
        updateDateTime(
          parsedDate,
          convertTo12Hour(newHour24),
          newMinute,
          newHour24 >= 12
        );
        setShowSuggestions(false);
      } else {
        onChange?.(undefined);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionSelect = (suggestionValue: string) => {
    const parsedDate = chrono.parseDate(suggestionValue, { timezone });
    if (parsedDate) {
      const newHour24 = getHours(parsedDate);
      const newMinute = getMinutes(parsedDate);
      setHour12(convertTo12Hour(newHour24));
      setMinute(newMinute);
      setIsPM(newHour24 >= 12);
      updateDateTime(
        parsedDate,
        convertTo12Hour(newHour24),
        newMinute,
        newHour24 >= 12
      );
    }
    setShowSuggestions(false);
    setCalendarOpen(false);
    inputRef.current?.blur();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setShowSuggestions(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, "0");

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          className="w-full px-3 py-2 text-sm border border-input rounded-md shadow-sm pr-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
              onClick={() => setShowSuggestions(false)}
              aria-label="Open calendar"
            >
              <CalendarIcon className="h-4 w-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 mt-1" align="end">
            <div className="p-3">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateChange}
                initialFocus
                {...dayPickerProps}
              />
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="flex items-center gap-1 p-1 border border-input rounded-md shadow-sm">
                  <input
                    type="number"
                    value={formatTimeUnit(hour12)}
                    onChange={(e) =>
                      handleHourChange(parseInt(e.target.value, 10))
                    }
                    onFocus={(e) => e.target.select()}
                    className="w-8 text-center bg-transparent focus:outline-none hide-arrows"
                    min={1}
                    max={12}
                  />
                  <span>:</span>
                  <input
                    type="number"
                    value={formatTimeUnit(minute)}
                    onChange={(e) =>
                      handleMinuteChange(parseInt(e.target.value, 10))
                    }
                    onFocus={(e) => e.target.select()}
                    className="w-8 text-center bg-transparent focus:outline-none hide-arrows"
                    min={0}
                    max={59}
                  />
                  <Select
                    value={isPM ? "PM" : "AM"}
                    onValueChange={handlePeriodChange}
                  >
                    <SelectTrigger className="h-auto border-0 p-0 px-1 focus:ring-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="PM">PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute w-full mt-1 bg-background rounded-md border shadow-lg z-50 overflow-hidden"
          >
            <Command>
              <CommandGroup>
                {currentSuggestions.map((suggestion) => (
                  <CommandItem
                    key={suggestion.value}
                    onSelect={() => handleSuggestionSelect(suggestion.value)}
                    className="cursor-pointer"
                  >
                    {suggestion.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </motion.div>
        )}
      </AnimatePresence>
      {/* CSS to hide number input arrows */}
      <style>{`
        .hide-arrows::-webkit-outer-spin-button,
        .hide-arrows::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .hide-arrows {
          -moz-appearance: textfield; /* Firefox */
        }
      `}</style>
    </div>
  );
}
