import { useState } from "react";
import MainPage from "./components/main-page";

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  return (
    <div>
      <MainPage openSettings={openSettings} setOpenSettings={setOpenSettings} />
    </div>
  );
}

export default App;
