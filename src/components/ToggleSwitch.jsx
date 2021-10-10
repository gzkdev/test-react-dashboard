import { useState } from "react";

function ToggleSwitch() {
  const [toggle, setToggle] = useState("");
  function toggleSwitch() {
    if (!(toggle === "on")) {
      setToggle("on");
      return;
    }
    setToggle("");
  }
  return (
    <div
      onClick={toggleSwitch}
      data-toggle={toggle ? "on" : ""}
      className="toggle-box"
    ></div>
  );
}

export default ToggleSwitch;
