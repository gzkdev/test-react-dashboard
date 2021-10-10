import { FaSearch } from "react-icons/fa";

function Sidebar({ dataToggle }) {
  return (
    <div className={`app-sidebar ${dataToggle}`}>
      <div className="app-sidebar-ctn ctn">
        <div className="form-box">
          <FaSearch className="form-box-icon" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="app-sidebar-btn-box">
          <button className="btn">Resquest Quote</button>
          <button className="btn green">Book Shipment</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
