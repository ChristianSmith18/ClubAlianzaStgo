export interface CalendarRootData {
  years: Year[];
}

export interface Year {
  year: number;
  months: Month[];
}

export interface Month {
  month: number;
  days: Day[];
}

export interface Day {
  day: number;
  eventos: string[];
}
