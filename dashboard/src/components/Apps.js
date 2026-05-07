import React, { useEffect } from "react";
import axios from "axios";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Apps = () => {

  useEffect(()=>{
      axios.get("https://zerodha-clone-mern-backend.onrender.com/allHoldings", {
          withCredentials: true
      })
      .then(res=>{
          if(res.data.status === false){
              window.location.href = "https://zerodha-clone-mern-frontend.vercel.app";
          }
      })
      .catch(()=>{
          window.location.href = "https://zerodha-clone-mern-frontend.vercel.app";
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