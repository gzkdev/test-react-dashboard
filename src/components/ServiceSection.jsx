import { FaPlane, FaShip, FaTruck, FaUser } from "react-icons/fa";
function ServiceSection() {
  return (
    <section className="services">
      <h3>Select Service</h3>
      <div className="services-ctn">
        <div className="service-box">
          <p>Air Freight</p>
          <span className="service-box-icon">
            <FaPlane></FaPlane>
          </span>
        </div>
        <div className="service-box">
          <p>Sea Freight</p>
          <span className="service-box-icon">
            <FaShip></FaShip>
          </span>
        </div>
        <div className="service-box">
          <p>
            Inland <br />
            (Truck and Barge)
          </p>
          <span className="service-box-icon">
            <FaTruck></FaTruck>
          </span>
        </div>
        <div className="service-box">
          <p>Customer clearance</p>
          <span className="service-box-icon">
            <FaUser></FaUser>
          </span>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
