import {Context} from "../App";
import {useContext} from "react";

const Children2 = () => {
  const {data} = useContext(Context);
  return (
    <div className='children'>
      <div>{JSON.stringify(data)}</div>
      <div>children 2</div>
    </div>
  );
}


export default Children2;
