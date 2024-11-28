import {useContext} from "react";
import {Context} from "../App";

const Children1 = () => {
  const {data} = useContext(Context);

  return (
    <div className='children'>
      <div>{JSON.stringify(data)}</div>
      <div>children 1</div>
    </div>
  );
}


export default Children1;
