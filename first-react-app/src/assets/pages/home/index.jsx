import React from "react";
import "./index.scss";
// import Photo from "../"

function Home() {
  return (
    <div>
      <section>
        <div className="left">
          <h1>ELECTRICAL SERVICE PROVIDERS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo
            commodi odit explicabo sapiente facere?
          </p>
          <button>Contact Us</button>
        </div>
        <div className="right">
          {/* <img src={Photo} alt="" /> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
