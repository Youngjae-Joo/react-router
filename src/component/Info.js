import { useParams } from "react-router-dom";

const Info = () => {


    const data={
        1:{name:"홍길동", subject:"리액트라우터"},
        2:{name:"이순신", subject:"리액트props"},
        3:{name:"coder", subject:"리액트state"},
    }


    //useParams()
    let param = useParams();
    //console.log(param);//URL주소에 값을 키로 받아줍니다.

    const {name,subject}=data[param.infoNum];

    return (
        <div>
            <h3>info페이지</h3>
            {name}님의 데이터 {subject}
            
        </div>
    )
}

export default Info;