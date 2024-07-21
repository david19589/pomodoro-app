import clsx from "clsx";
import ArrowUp from "/src/assets/icon-arrow-up.svg";
import ArrowDown from "/src/assets/icon-arrow-down.svg";
import { Dispatch, SetStateAction } from "react";

interface ChangeTimeProps {
  font: string;
  pomodoro: number;
  setPomodoro: Dispatch<SetStateAction<number>>;
  shortBrake: number;
  setShortBrake: Dispatch<SetStateAction<number>>;
  longBrake: number;
  setLongBrake: Dispatch<SetStateAction<number>>;
}

function ChangeTime(props: ChangeTimeProps) {
  return (
    <div className="md:p-[2.5rem] flex flex-col items-center p-[1.5rem]">
      <h2
        className={clsx(
          props.font === "sans" && "font-sans",
          props.font === "serif" && "font-serif",
          props.font === "mono" && "font-mono",
          "md:text-[0.85rem] md:leading-[1rem] md:text-start md:w-full text-[0.7rem] leading-[0.9rem] tracking-[0.3rem] font-[700] text-commonColor mb-[1.15rem]"
        )}
      >
        TIME (MINUTES)
      </h2>
      <div className="md:flex-row md:justify-between w-full flex flex-col">
        <div className="md:flex-col md:items-start md:gap-[0.5rem] md:mb-0 flex items-center justify-between mb-[0.5rem]">
          <h3
            className={clsx(
              props.font === "sans" && "font-sans",
              props.font === "serif" && "font-serif",
              props.font === "mono" && "font-mono",
              "text-[0.75rem] leading-[0.9rem] font-[700] text-commonColor3 opacity-[40%]"
            )}
          >
            pomodoro
          </h3>
          <div className="md:w-[9rem] flex items-center justify-between p-[1rem] bg-commonColor2 rounded-lg max-w-[9rem] w-full">
            <span
              className={clsx(
                props.font === "sans" && "font-sans",
                props.font === "serif" && "font-serif",
                props.font === "mono" && "font-mono",
                "text-[0.9rem] leading-[1rem] font-[700] text-commonColor3"
              )}
            >
              {props.pomodoro}
            </span>
            <div className="flex flex-col gap-[0.5rem]">
              <button>
                <img
                  onClick={() => {
                    props.setPomodoro((prev) => Math.min(prev + 1, 60));
                  }}
                  src={ArrowUp}
                  alt="ArrowUp"
                />
              </button>
              <button>
                <img
                  onClick={() => {
                    props.setPomodoro((prev) => Math.max(prev - 1, 1));
                  }}
                  src={ArrowDown}
                  alt="ArrowDown"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex-col md:items-start md:gap-[0.5rem] md:mb-0 flex items-center justify-between mb-[0.5rem]">
          <h3
            className={clsx(
              props.font === "sans" && "font-sans",
              props.font === "serif" && "font-serif",
              props.font === "mono" && "font-mono",
              "text-[0.75rem] leading-[0.9rem] font-[700] text-commonColor3 opacity-[40%]"
            )}
          >
            short break
          </h3>
          <div className="md:w-[9rem] flex items-center justify-between p-[1rem] bg-commonColor2 rounded-lg max-w-[9rem] w-full">
            <span
              className={clsx(
                props.font === "sans" && "font-sans",
                props.font === "serif" && "font-serif",
                props.font === "mono" && "font-mono",
                "text-[0.9rem] leading-[1rem] font-[700] text-commonColor3"
              )}
            >
              {props.shortBrake}
            </span>
            <div className="flex flex-col gap-[0.5rem]">
              <button>
                <img
                  onClick={() => {
                    props.setShortBrake((prev) => Math.min(prev + 1, 60));
                  }}
                  src={ArrowUp}
                  alt="ArrowUp"
                />
              </button>
              <button>
                <img
                  onClick={() => {
                    props.setShortBrake((prev) => Math.max(prev - 1, 1));
                  }}
                  src={ArrowDown}
                  alt="ArrowDown"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex-col md:items-start md:gap-[0.5rem] flex items-center justify-between">
          <h3
            className={clsx(
              props.font === "sans" && "font-sans",
              props.font === "serif" && "font-serif",
              props.font === "mono" && "font-mono",
              "text-[0.75rem] leading-[0.9rem] font-[700] text-[#1E213F] opacity-[40%]"
            )}
          >
            long break
          </h3>
          <div className="md:w-[9rem] flex items-center justify-between p-[1rem] bg-[#EFF1FA] rounded-lg max-w-[9rem] w-full">
            <span
              className={clsx(
                props.font === "sans" && "font-sans",
                props.font === "serif" && "font-serif",
                props.font === "mono" && "font-mono",
                "text-[0.9rem] leading-[1rem] font-[700] text-[#1E213F]"
              )}
            >
              {props.longBrake}
            </span>
            <div className="flex flex-col gap-[0.5rem]">
              <button>
                <img
                  onClick={() => {
                    props.setLongBrake((prev) => Math.min(prev + 1, 60));
                  }}
                  src={ArrowUp}
                  alt="ArrowUp"
                />
              </button>
              <button>
                <img
                  onClick={() => {
                    props.setLongBrake((prev) => Math.max(prev - 1, 1));
                  }}
                  src={ArrowDown}
                  alt="ArrowDown"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeTime;
