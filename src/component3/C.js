import { useContext } from "react";
import userContext from "../contexts/contextAPI2";

const C = () => {

    const {state,action}=useContext(userContext);

    return (
        <>
            <hr/>
            <h3>C컴포넌트</h3>
            컨텍스트안에 값:{state.id}<br/>
            컨텍스트안에 값:{state.name}<br/>
        </>
    )
}
export default C;