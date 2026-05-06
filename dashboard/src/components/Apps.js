import React, { useEffect } from "react";
import axios from "axios";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Apps = () => {

  useEffect(()=>{
      axios.get("http://localhost:3002/allHoldings", {
          withCredentials: true
      })
      .then(res=>{
          if(res.data.status === false){
              window.location.href = "http://localhost:3000/login";
          }
      })
      .catch(()=>{
          window.location.href = "http://localhost:3000/login";
      });
  }, []);

  return (
    <div>
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Apps;