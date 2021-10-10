import ToggleSwitch from "./ToggleSwitch";

function DetailsSection() {
  return (
    <section className="details">
      <div className="details-header">
        <h3>Cargo details</h3>
        <div className="toggle-ctn">
          <ToggleSwitch></ToggleSwitch>&nbsp;&nbsp;Dangerous Cargo (ex.
          Chemicals, Battery)
        </div>
      </div>
      <div className="package-type-box">
        <button>Total Dimensions</button>
        <button>Package Details</button>
      </div>
      <div className="details-units-box">
        <div className="details-form-box">
          <label htmlFor="volume">Total volume</label>
          <span className="details-unit">cbm</span>
          <input type="number" name="volume" id="volume" />
        </div>
        <div className="details-form-box">
          <label htmlFor="volume">Total weight</label>
          <span className="details-unit">Kg</span>
          <input type="number" name="weight" id="weight" />
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
