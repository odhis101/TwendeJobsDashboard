import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

const App = () => {

  
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
};

export default App;
