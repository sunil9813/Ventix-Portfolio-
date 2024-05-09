import { educationData, experienceData } from "../assets/data/data";
import { CiMedal } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";

export const Resume = () => {
  return (
    <>
      <section className="resume-section">
        <div className="container flexSB">
          <div className="w-half">
            <div className="section-header">
              <h2 className="section-title">
                <PiGraduationCap size={50} /> My Experience
              </h2>
            </div>

            <div className="resume-widget">
              {experienceData.map((item) => (
                <div className="resume-item" key={item.id}>
                  <div className="time">{item.time}</div>
                  <h3 className="resume-title">{item.title}</h3>
                  <div className="institute">{item.institute}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-half">
            <div className="section-header">
              <h2 className="section-title flexE">
                <CiMedal size={50} />
                My Education
              </h2>
            </div>
            <div className="resume-widget">
              {educationData.map((item) => (
                <div className="resume-item" key={item.id}>
                  <div className="time">{item.time}</div>
                  <h3 className="resume-title">{item.title}</h3>
                  <div className="institute">{item.institute}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
