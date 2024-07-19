import Logo from "/src/assets/logo.svg";
import Settings from "/src/assets/icon-settings.svg";
import CountDownTimer from "../countdown-timer";

function MainPage(props: {
  openSettings: boolean;
  setOpenSettings: (status: boolean) => void;
}) {
  return (
    <div className="pt-[2rem] pb-[3rem] flex flex-col items-center">
      <img className="mb-[2.8rem]" src={Logo} alt="Logo" />
      <div className="flex justify-between bg-[#161932] mb-[3rem] rounded-full p-[0.5rem]">
        <button>
          <h2 className="text-[0.8rem] leading-[0.9rem] font-[700] font-sans text-[#D7E0FF] p-[1.2rem]">
            pomodoro
          </h2>
        </button>
        <button>
          <h2 className="text-[0.8rem] leading-[0.9rem] font-[700] font-sans text-[#D7E0FF] p-[1.2rem]">
            short break
          </h2>
        </button>
        <button>
          <h2 className="text-[0.8rem] leading-[0.9rem] font-[700] font-sans text-[#D7E0FF] p-[1.2rem]">
            long break
          </h2>
        </button>
      </div>
      <CountDownTimer
        openSettings={props.openSettings}
      />
      <button>
        <img src={Settings} alt="Settings" />
      </button>
    </div>
  );
}

export default MainPage;
