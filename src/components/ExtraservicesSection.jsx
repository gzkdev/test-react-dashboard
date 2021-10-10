import ToggleSwitch from "./ToggleSwitch";

function ExtraservicesSection() {
  return (
    <section className="extras">
      <h3>Additional Services</h3>
      <div className="extras-ctn">
        <div className="extras-box">
          <ToggleSwitch />
          <div className="description">
            <h4>Expert Forwarding</h4>
            <p>We handle custom clearance and documentation</p>
          </div>
        </div>

        <div className="extras-box">
          <ToggleSwitch />
          <div className="description">
            <h4>Import Customs Clearance</h4>
            <p>We handle import customs and regulatory requirements</p>
          </div>
        </div>

        <div className="extras-box">
          <ToggleSwitch />
          <div className="description">
            <h4>Cargo Insurance</h4>
            <p>Protect your cargo from logistics risks up to its full value</p>
          </div>
        </div>

        <div className="extras-box">
          <ToggleSwitch />
          <div className="description">
            <h4>Transport/Delivery</h4>
            <p>We deliver the cargo to your doorsteps from the port</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExtraservicesSection;
