import { useRoutes, Route , Routes} from "react-router-dom";
import Themeroutes from "./routes/Router";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Login from "./views/Login";

const App = () => {

  
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}
  
  </div>;
};

export default App;
