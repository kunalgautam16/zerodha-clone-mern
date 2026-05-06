import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"
                style={{transform: "scale(1.7)", marginTop:"17px"}}          
          />
          <p className="text-small text-muted" style={{marginTop : "14px"}}>Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
            <img
                src="media/images/streakLogo.png"
                style={{ transform: "scale(0.08)", transformOrigin: "left", marginTop: "-235px", marginLeft : "80px"}}
            />
            <p className="text-small text-muted" style={{marginTop : "-235px"}}>Systematic trading platform</p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;