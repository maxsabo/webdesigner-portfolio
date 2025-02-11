import PropTypes from "prop-types";
import "./Overview.scss";

export const Overview = ({
  imageSrc,
  role,
  roleDescription,
  team,
  timeline,
  status,
  overview,
}) => {
  return (
    <section id="overview" className="overview">
      <div className="overview__image">
        <img src={imageSrc} alt="Product showcase" />
      </div>
      <div className="overview__content">
        <div className="overview__left">
          <h3 className="overview__headline">My Role</h3>
          <p className="overview__text">
            <span className="overview__bright-text">{role}</span>
            <span className="overview__dark-text"> — {roleDescription}</span>
          </p>

          <h3 className="overview__headline">Team</h3>
          <div className="overview__text">
            {team.map((member) => {
              return (
                <p key={member} className="overview__dark-text">
                  {member}
                </p>
              );
            })}
          </div>
          <h3 className="overview__headline">Timeline & Status</h3>

          <p className="overview__text">
            <span className="overview__dark-text">{timeline}, </span>
            <span className="overview__bright-text"> {status}</span>
          </p>
        </div>
        <div className="overview__right">
          <h3 className="overview__headline">Overview</h3>
          <p className="overview__dark-text">{overview}</p>
        </div>
      </div>
    </section>
  );
};

Overview.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  roleDescription: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  team: PropTypes.arrayOf(PropTypes.string).isRequired,
};
