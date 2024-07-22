import clsx from "clsx";

function ChangeFont(props: {
  font: string;
  setFont: (status: string) => void;
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
        FONT
      </h2>
      <div className="flex gap-[1rem]">
        <button
          onClick={() => {
            props.setFont("sans");
          }}
          className={clsx(
            props.font === "sans"
              ? "bg-commonColor text-[#FFF]"
              : "bg-commonColor2 text-commonColor3 hover:bg-commonColor8",
            "text-[0.95rem] leading-[1.15rem] font-sans fort-[700] w-[2.5rem] h-[2.5rem] rounded-full transition-all duration-300"
          )}
        >
          Aa
        </button>
        <button
          onClick={() => {
            props.setFont("serif");
          }}
          className={clsx(
            props.font === "serif"
              ? "bg-commonColor text-[#FFF]"
              : "bg-commonColor2 text-commonColor3 hover:bg-commonColor8",
            "text-[0.95rem] leading-[1.15rem] font-serif fort-[700] w-[2.5rem] h-[2.5rem] rounded-full transition-all duration-300"
          )}
        >
          Aa
        </button>
        <button
          onClick={() => {
            props.setFont("mono");
          }}
          className={clsx(
            props.font === "mono"
              ? "bg-commonColor text-[#FFF]"
              : "bg-commonColor2 text-commonColor3 hover:bg-commonColor8",
            "text-[0.95rem] leading-[1.15rem] font-mono fort-[700] w-[2.5rem] h-[2.5rem] rounded-full transition-all duration-300"
          )}
        >
          Aa
        </button>
      </div>
    </div>
  );
}

export default ChangeFont;
