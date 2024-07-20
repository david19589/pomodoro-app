import Check from "/src/assets/icon-check.svg";
import clsx from "clsx";

function ChangeColor(props: {
  color: string;
  setColor: (status: string) => void;
  font: string;
}) {
  return (
    <div className="flex flex-col items-center p-[1.5rem]">
      <h2
        className={clsx(
          props.font === "sans" && "font-sans",
          props.font === "serif" && "font-serif",
          props.font === "mono" && "font-mono",
          "text-[0.7rem] leading-[0.9rem] tracking-[0.3rem] font-[700] text-[#161932] mb-[1.15rem]"
        )}
      >
        Color
      </h2>
      <div className="flex gap-[1rem]">
        <button
          onClick={() => {
            props.setColor("red");
          }}
          className={clsx(
            "w-[2.5rem] h-[2.5rem] rounded-full bg-[#F87070] flex items-center justify-center"
          )}
        >
          <img
            className={clsx(props.color === "red" ? "flex" : "hidden")}
            src={Check}
            alt="Check"
          />
        </button>
        <button
          onClick={() => {
            props.setColor("lightblue");
          }}
          className={clsx(
            "w-[2.5rem] h-[2.5rem] rounded-full bg-[#70F3F8] flex items-center justify-center"
          )}
        >
          <img
            className={clsx(props.color === "lightblue" ? "flex" : "hidden")}
            src={Check}
            alt="Check"
          />
        </button>
        <button
          onClick={() => {
            props.setColor("purple");
          }}
          className={clsx(
            "w-[2.5rem] h-[2.5rem] rounded-full bg-[#D881F8] flex items-center justify-center"
          )}
        >
          <img
            className={clsx(props.color === "purple" ? "flex" : "hidden")}
            src={Check}
            alt="Check"
          />
        </button>
      </div>
    </div>
  );
}

export default ChangeColor;
