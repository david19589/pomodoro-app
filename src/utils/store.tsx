import { create } from "zustand";

type TimerOption = "pomodoro" | "shortBrake" | "longBrake";

type StateStore = {
  openSettings: boolean;
  setOpenSettings: (status: boolean) => void;
  font: string;
  setFont: (status: string) => void;
  color: string;
  setColor: (status: string) => void;
  option: TimerOption;
  setOption: (status: TimerOption) => void;
  pomodoro: number;
  setPomodoro: (status: number) => void;
  shortBrake: number;
  setShortBrake: (status: number) => void;
  longBrake: number;
  setLongBrake: (status: number) => void;
  apply: boolean;
  setApply: (status: boolean) => void;
};

export const useStateStore = create<StateStore>((set) => ({
  openSettings: false,
  setOpenSettings: (openSettings) => set({ openSettings }),
  font: "sans",
  setFont: (font) => set({ font }),
  color: "red",
  setColor: (color) => set({ color }),
  option: "pomodoro",
  setOption: (option) => set({ option }),
  pomodoro: 25,
  setPomodoro: (pomodoro) => set({ pomodoro }),
  shortBrake: 5,
  setShortBrake: (shortBrake) => set({ shortBrake }),
  longBrake: 15,
  setLongBrake: (longBrake) => set({ longBrake }),
  apply: false,
  setApply: (apply) => set({ apply }),
}));
