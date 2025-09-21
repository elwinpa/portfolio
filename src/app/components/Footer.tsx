import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="mailto:evettiankal@gmail.com" aria-label="Email">
          <i className="fa fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/elwin-paulson" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fa fa-linkedin"></i>
        </a>
        {/* <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa fa-github"></i>
        </a> */}
      </div>

      <div className="footer-credit">
        Designed &amp; Developed by <strong>Elwin Paulson</strong>
      </div>
    </footer>
  );
}
