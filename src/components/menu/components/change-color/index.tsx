import Check from "/src/assets/icon-check.svg";
import clsx from "clsx";

function ChangeColor(props: {
  color: string;
  setColor: (status: string) => void;
  font: string;
}) {
  return (
    <div className="md:flex-row md:justify-between flex flex-col items-center py-[1.5rem]">
      <h2
        className={clsx(
          props.font === "sans" && "font-sans",
          props.font === "serif" && "font-serif",
          props.font === "mono" && "font-mono",
          "md:mb-0 text-[0.7rem] leading-[0.9rem] tracking-[0.3rem] font-[700] text-commonColor mb-[1.15rem]"
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
            props.color !== "red" && "hover:bg-[#f87070d8]",
            "w-[2.5rem] h-[2.5rem] rounded-full bg-commonColor4 flex items-center justify-center transition-all duration-300"
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
            props.color !== "lightblue" && "hover:bg-[#70f4f8c5]",
            "w-[2.5rem] h-[2.5rem] rounded-full bg-commonColor5 flex items-center justify-center transition-all duration-300"
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
            props.color !== "purple" && "hover:bg-[#d881f8c4]",
            "w-[2.5rem] h-[2.5rem] rounded-full bg-commonColor6 flex items-center justify-center transition-all duration-300"
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
