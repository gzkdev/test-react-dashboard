import { FaCalendar, FaInfoCircle, FaMapMarker } from "react-icons/fa";

function InfoSection() {
  return (
    <section className="info">
      <div className="info-ctn">
        <div className="info-tab">
          <FaInfoCircle className="info-tab-icon" />
          <button>Import</button>
          <button>Export</button>
        </div>
        <div className="info-form-box">
          <FaMapMarker className="info-icon" />
          <input type="text" placeholder="From: City or Port" />
        </div>
        <div className="info-form-box">
          <FaMapMarker className="info-icon" />
          <input type="text" placeholder="To: City or Port" />
        </div>
        <div className="info-form-box">
          <FaCalendar className="info-icon" />
          <input type="text" placeholder="Ready date" />
        </div>
        <div className="info-form-box">
          <input list="type" type="text" />
          <datalist id="type">
            <option>Icoterms</option>
            <option>Visaviz</option>
            <option>Airbnb</option>
          </datalist>
        </div>
        <div className="info-form-box">
          <input type="text" placeholder="Total Cargo Value" />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
