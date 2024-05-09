import { service } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";
// import { GoArrowUpLeft } from "react-icons/go";

export const Service = () => {
  return (
    <>
      <section className="services-section" id="services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInUp">My Quality Services</h2>
            <p className=" wow fadeInUp" data-wow-delay=".4s">
              We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
            </p>
          </div>

          <div className="services-widget position-relative">
            {service.map((item) => (
              <div className={`service-item flexSB`} key={item.id}>
                <div className="left-box">
                  <span className="number">0{item.id}</span>
                  <h3 className="service-title">{item.title}</h3>
                </div>
                <div className="right-box">
                  <p>{item.text}</p>
                </div>
                <i>
                  <GoArrowUpRight size={40} />
                </i>
                <button className="service-link modal-popup"></button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
