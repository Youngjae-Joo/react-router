// import { UserConsumer } from "../contexts/contextAPI2";

import { useContext, useRef } from "react";
import userContext from "../contexts/contextAPI2";

const A = () => {

    //초기값을 구조분해 할당
    const {state,action}= useContext(userContext)
    const input1=useRef(null);
    const input2=useRef(null);

    const handleClick=()=>{
        action.setUser({id:input1.current.value, name:input2.current.value})
    }

    return (
        /* 2nd-useContext훅을 이용해서 처리*/
        <div>
            <h3>A컴포넌트</h3>
            컨텍스트안에 값:{state.id}<br/>
            컨텍스트안에 값:{state.name}<br/>

            <div>
                <input type="text" ref={input1}/><br/>
                <input type="text" ref={input2}/><br/>
                <button onClick={handleClick}>컨텍스트데이터변경</button>
            </div>
        </div>

        /* 1st
         <UserConsumer>
            {(value)=>
                <div>
                    <h3>A컴포넌트</h3>
                    컨텍스트안에 값: {value.state.id}<br/>
                    컨텍스트안에 값: {value.state.name}<br/>
                </div>
            }
        </UserConsumer> */
    )
}
export default A;