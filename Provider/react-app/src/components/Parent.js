import Children1 from "./Children1";
import Children2 from "./Children2";
import {Context} from "../App";
import {useContext} from "react";

const Parent = () => {
  const {toggleTheme} = useContext(Context);

  return (
    <div className="Parent">
      <Children1 />
      <Children2 />
      <button onClick={toggleTheme}>theme toggle</button>
    </div>
  );
}

export default Parent;
