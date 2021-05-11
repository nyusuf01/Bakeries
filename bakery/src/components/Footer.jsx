import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      &copy; Nadia Yusuf
      <div className="links">
        <a href="https://github.com/nyusuf01" target="_blank">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.png"
            alt="GitHub Logo"
            rel="no referrer"
          />
        </a>
      </div>
      <div className="shout-out">
        Special thanks to all the Loon NYC instructors from General Assembly
      </div>
    </div>
  );
};

export default Footer;
