import { Fragment, useEffect, useState } from "react";

const App = () => {
    /*
    Ajax를 이용해서 외부데이터 가져오기
    1. Promise=fetch(요청주소)
    
    */

    const [raw, setRaw] = useState();

    //클릭해서 데이터 가져오기
    const handleClick = () => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
            .then(response => response.json())
            .then(data => setRaw(data))
    }

    //화면이 mount이후 데이터 가져오기 -useEffect(function,[])
    const [datas, setDatas] = useState();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
            .then(response => response.json())
            .then(data => setDatas(data))
    }, []);


    return (
        <Fragment>
            <button onClick={handleClick}>데이터가져오기</button>
            {raw === undefined ?
                <div>데이터준비중...</div>
                :
                <div>{raw.userId}<br/> {raw.userPw}<br/> {raw.userName}</div>
            }

            <hr />
            <h3>mount이후 데이터 가져오기</h3>

            {
                datas && <div>
                    아이디: {datas.userId}<br/>
                    비밀번호: {datas.userPw}<br/>
                    이름: {datas.userName}<br/>
                </div>
            }




        </Fragment>
    )
}

export default App;