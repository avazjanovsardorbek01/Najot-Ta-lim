import React from "react";
import "./index.css";

const Index = () => {
  return (
    <div className="footer container-fluid">
      <div className="footer-down d-flex align-items-center justify-content-between">
        <div className="footer-item text-center">
          <h2 className="footer-date">396 mi</h2>
          <p className="footer-desc">Range (EPA est.)</p>
        </div>
        <div className="footer-item text-center">
          <h2 className="footer-date">1.99s</h2>
          <p className="footer-desc">0-60 mph*</p>
        </div>
        <div className="footer-item text-center">
          <h2 className="footer-date">200 mph</h2>
          <p className="footer-desc">Top Speed†</p>
        </div>
        <div className="footer-item text-center">
          <h2 className="footer-date">1,020 hp</h2>
          <p className="footer-desc">Peak Power</p>
        </div>
        <div className="footer-item">
          <button className="footer-btn">Order Now &gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
