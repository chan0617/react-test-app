import {useNavigate,useSearchParams} from "react-router-dom";
const Edit= () => {
    //let searchParamsUrl = useSearchParams();    
    //let searchParams = useSearchParamsUrl[0];    
    //let setSearchParams=useSearchParams[1];
    let [searchParams, setSearchParams] = useSearchParams();    
    // console.log(searchParams); 
    let navi=useNavigate();
    const id=searchParams.get("id");
    const mode=searchParams.get("mode");
        
    return (
       <div>
        <span>Edit Page{id}
        <br />
        <button onClick={()=>navi("/")}>Home</button><br />
        <button onClick={()=>navi("/new")}>New</button>
            <ul>
                <li>{mode}</li>
            </ul>
        </span>
      </div>
    );
  };
  export default Edit;