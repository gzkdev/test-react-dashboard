import Header from "./components/Header";
import { FaArrowLeft } from "react-icons/fa";
import ServiceSection from "./components/ServiceSection";
import InfoSection from "./components/InfoSection";
import DetailsSection from "./components/DetailsSection";
import ExtraservicesSection from "./components/ExtraservicesSection";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
function App() {
  const [openMenu, setOpenMenu] = useState("");
  function toggleMenu() {
    if (!(openMenu === "open")) {
      setOpenMenu("open");
      return;
    }
    setOpenMenu("");
  }
  return (
    <>
      <Sidebar dataToggle={openMenu}></Sidebar>
      <Header toggleMenu={toggleMenu}></Header>
      <div className="ctn">
        <div className="app-heading">
          <h2>
            <FaArrowLeft className="icon" />
            &nbsp;New Booking
          </h2>
          <p>Fill in the information to get a quote or create a new booking</p>
        </div>
        <ServiceSection></ServiceSection>
        <InfoSection></InfoSection>
        <DetailsSection></DetailsSection>
        <ExtraservicesSection></ExtraservicesSection>
      </div>
    </>
  );
}

export default App;
