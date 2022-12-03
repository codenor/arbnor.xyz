import React from "react";

const sourceHandle = () => {
  document.location.href = "https://github.com/codenor/arbnor.xyz";
};

const kofiHandle = () => {
  document.location.href = "https://ko-fi.com/arbnor";
};

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text"></div>
      <p1>
        &copy; {new Date().getFullYear()} Arbnor -{" "}
        <a onClick={sourceHandle}>Source Code</a>
        <a> - </a>
        <a onClick={kofiHandle}>Donate</a>
      </p1>
    </div>
  );
}

export default Footer;
