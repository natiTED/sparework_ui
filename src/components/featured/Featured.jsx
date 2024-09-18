import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>product and</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.jpg" alt="" />
              <input type="text" placeholder='Try "building website app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
