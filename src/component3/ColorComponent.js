import { Fragment } from "react";
import ColorContext from "../contexts/ContextAPI";

const ColorComponent=()=>{
    return(
        <Fragment>
            <ColorContext.Consumer>
            {/* 사용할 곳:Consumer-함수의 return구문에 화면을 처리할 내용을 작성함 */}
                {(value)=>
                    <div style={{background:value.color}}>
                        ContextAPI의 사용<br/>
                        값: {value.color}
                    </div>
                }
            </ColorContext.Consumer>
        </Fragment>
    )
}

export default ColorComponent;