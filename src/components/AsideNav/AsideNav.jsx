import { useState } from "react";
import PropTypes from "prop-types";
import "./AsideNav.scss";

export const AsideNav = ({sections}) => {
  const [active, setActive] = useState(null);

  return (
    <aside className="aside-nav">
      <h2 className="aside-nav__title">Contents</h2>
      <ul className="aside-nav__list">
        {sections.map((section) => (
          <li key={section} className="aside-nav__item">
            <a
              href={`#${section.replace(/\s+/g, "-").toLowerCase()}`}
              className={`aside-nav__link ${active === section ? "active" : ""}`}
              onClick={() => setActive(section)}
            >
              <span className="aside-nav__icon" />
              {section}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

AsideNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};
