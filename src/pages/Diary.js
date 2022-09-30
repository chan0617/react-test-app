import {useParams} from "react-router-dom";
const Diary= () => {
    const {id}=useParams();
    return (
      <div>
        <span>Diary {id}</span>
      </div>
    );
  };
  export default Diary;