import { createContext, useState } from "react";

//1.초기값 설정
const userContext=createContext({
    state:{id:'aaa',name:'bbb'},
    action:{setUser:()=>{}}
})

//2. Provider 정의 - 구조분해할당은 반드시 children으로
const UserProvider=({children})=>{
    
    const [user,setUser]=useState({id:'aaa',name:'bbb'});
    const value={
        state:user,
        action:{setUser}/* {setUser:setUSer}가 맞는데, 함수면 줄여쓸수있다. 여기서 setUser는 useState 구조분해할당한 함수임 */
    }

    // console.log(children);
    // console.log(value);

    return(
        <userContext.Provider value={value}>{children}</userContext.Provider>
    )
}

//3. 컨슈머, 프로바이더 반환
const UserConsumer=userContext.Consumer;

export {UserProvider,UserConsumer};

//4.기본 export
export default userContext;