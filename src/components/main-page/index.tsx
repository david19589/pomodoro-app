import Logo from "/src/assets/logo.svg";
import CountDownTimer from "../countdown-timer";
import Menu from "../menu";
import clsx from "clsx";
import { useStateStore } from "../../utils/store";

function MainPage() {
  const { font, color, option, setOption } = useStateStore();

  return (
    <div className="pt-[2rem] pb-[3rem] flex flex-col items-center">
      <img className="mb-[2.8rem]" src={Logo} alt="Logo" />
      <div className="flex justify-between bg-commonColor mb-[3rem] rounded-full p-[0.5rem] z-10">
        <button
          onClick={() => {
            setOption("pomodoro");
          }}
        >
          <h2
            className={clsx(
              font === "sans" && "font-sans",
              font === "serif" && "font-serif",
              font === "mono" && "font-mono",
              option === "pomodoro" && color === "red" && "bg-commonColor4",
              option === "pomodoro" &&
                color === "lightblue" &&
                "bg-commonColor5",
              option === "pomodoro" && color === "purple" && "bg-commonColor6",
              option === "pomodoro"
                ? "text-commonColor3"
                : "text-commonColor7 opacity-[40%] hover:opacity-100",
              "md:text-[0.9rem] md:py-[1.3rem] md:px-[1.5rem] text-[0.8rem] leading-[0.9rem] font-[700] p-[1.2rem] rounded-full transition-all duration-100"
            )}
          >
            pomodoro
          </h2>
        </button>
        <button
          onClick={() => {
            setOption("shortBrake");
          }}
        >
          <h2
            className={clsx(
              font === "sans" && "font-sans",
              font === "serif" && "font-serif",
              font === "mono" && "font-mono",
              option === "shortBrake" && color === "red" && "bg-commonColor4",
              option === "shortBrake" &&
                color === "lightblue" &&
                "bg-commonColor5",
              option === "shortBrake" &&
                color === "purple" &&
                "bg-commonColor6",
              option === "shortBrake"
                ? "text-commonColor3"
                : "text-commonColor7 opacity-[40%] hover:opacity-100",
              "md:text-[0.9rem] md:py-[1.3rem] md:px-[1.5rem] text-[0.8rem] leading-[0.9rem] font-[700]  p-[1.2rem] rounded-full transition-all duration-100"
            )}
          >
            short break
          </h2>
        </button>
        <button
          onClick={() => {
            setOption("longBrake");
          }}
        >
          <h2
            className={clsx(
              font === "sans" && "font-sans",
              font === "serif" && "font-serif",
              font === "mono" && "font-mono",
              option === "longBrake" && color === "red" && "bg-commonColor4",
              option === "longBrake" &&
                color === "lightblue" &&
                "bg-commonColor5",
              option === "longBrake" && color === "purple" && "bg-commonColor6",
              option === "longBrake"
                ? "text-commonColor3"
                : "text-commonColor7 opacity-[40%] hover:opacity-100",
              "md:text-[0.9rem] md:py-[1.3rem] md:px-[1.5rem] text-[0.8rem] leading-[0.9rem] font-[700] p-[1.2rem] rounded-full transition-all duration-100"
            )}
          >
            long break
          </h2>
        </button>
      </div>
      <CountDownTimer />
      <Menu />
    </div>
  );
}

export default MainPage;
