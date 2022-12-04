import React from "react";

const sourceHandle = () => {
  document.location.href = "https://github.com/codenor/arbnor.xyz";
};

const donateHandle = () => {
  document.location.href = "https://arbnor.xyz/donate";
};

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text"></div>
      <p1>
        &copy; {new Date().getFullYear()} Arbnor -{" "}
        <a onClick={sourceHandle}>Source Code</a>
        <a> - </a>
        <a onClick={donateHandle}>Donate</a>
      </p1>
    </div>
  );
}

export default Footer;
