import React from 'react';

function FooterLinks(props) {
  return (
    <div className="links">
      {props.columns.map((column, index) => (
        <div key={index} className={`column column-${index}`}>
          <div className={`heading heading-${index}`}>{column.heading}</div>
          <div className={`footer-links footer-links-${index}`}>
            {column.links.map((link, i) => (
              <div key={i} className={`link link-${i}`}>
                {link.icon && ( // Check if the link has an icon
                  <div className={`icon-${link.icon}`}>
                    <img className={`vector-${i}`} src={link.iconSrc} alt={link.text} />
                  </div>
                )}
                <span className={`link-${i}-text`}>{link.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
