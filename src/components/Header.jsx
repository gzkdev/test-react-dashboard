import { FaBars, FaSearch } from "react-icons/fa";
function header({ toggleMenu }) {
  return (
    <div className="app-header">
      <div className="header-ctn ctn">
        <a href="./#">send FREIGHT</a>
        <div className="form-box">
          <FaSearch className="form-box-icon" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="button-box">
          <button className="btn">Resquest Quote</button>
          <button className="btn green">Book Shipment</button>
        </div>
        <div className="menu-box" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}

export default header;
