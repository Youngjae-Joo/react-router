import axios from "axios";

const App=()=>{

    const handleClick= async()=>{
        const data={"num":30,"id":"kier","name":"키에르"};
      const result=await axios.post("http://localhost:8383/getJson", data); 

      console.log(result);
    }


    return(
        <div>
            <input type="button" onClick={handleClick} value="데이터요청하기"/>
        </div>
    )
}

export default App;