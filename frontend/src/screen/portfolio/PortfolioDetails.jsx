import { FaArrowRight } from "react-icons/fa6";
import { projectsDetails } from "../../assets/data/data";

export const PortfolioDetails = () => {
  return (
    <>
      {projectsDetails.map((project) => (
        <div className="popup_content_area" key={project.id}>
          <div className="popup_modal_img">
            <img src="../images/portfolio/p4.jpg" alt="" />
          </div>

          <div className="popup_modal_content">
            <div className="container">
              <div className="portfolio_info">
                <div className="portfolio_info_text">
                  <h2 className="title">{project.title}</h2>
                  <div className="desc">
                    <p>{project.description}</p>
                  </div>
                  <a href="#" className="btn tj-btn-primary">
                    live preview <i className="fal fa-arrow-right"></i>
                  </a>
                </div>
                <div className="portfolio_info_items">
                  <div className="info_item">
                    <div className="key">Category</div>
                    <div className="value">{project.category}</div>
                  </div>
                  <div className="info_item">
                    <div className="key">Client</div>
                    <div className="value">{project.client}</div>
                  </div>
                  <div className="info_item">
                    <div className="key">Start Date</div>
                    <div className="value">{project.startDate}</div>
                  </div>
                  <div className="info_item">
                    <div className="key">Designer</div>
                    <div className="value">
                      <a href="#">{project.designer}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio_gallery grid2">
                {project.images.map((image, index) => (
                  <div className="gallery_item" key={index}>
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>

              <div className="portfolio_description">
                <h2 className="title">Project Description</h2>
                <div className="desc">
                  <p>{project.description}</p>
                  <br />
                  <p>{project.description2}</p>
                </div>
              </div>

              <div className="portfolio_story_approach">
                <div className="portfolio_story">
                  <div className="story_title">
                    <h4 className="title">The story</h4>
                  </div>
                  <div className="story_content">
                    <p>{project.story}</p>
                  </div>
                </div>
                <div className="portfolio_approach">
                  <div className="approach_title">
                    <h4 className="title">OUR APPROACH</h4>
                  </div>
                  <div className="approach_content">
                    <p>{project.approach}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio_navigation">
              <div className="navigation_item prev-project">
                <a href="#" className="project">
                  <i className="fal fa-arrow-left"></i>
                  <div className="nav_project">
                    <div className="label">Previous Project</div>
                    <h3 className="title">Sebastian</h3>
                  </div>
                </a>
              </div>

              <div className="navigation_item next-project">
                <a href="#" className="project">
                  <div className="nav_project">
                    <div className="label">Next Project</div>
                    <h3 className="title">Qwillo</h3>
                  </div>
                  <i>
                    <FaArrowRight size={50} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
