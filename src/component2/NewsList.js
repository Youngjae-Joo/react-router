import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import styled from './NewsList.module.css'

const NewsList = () => {
    
    //1. API 가져오기
    //개인 키 c60ca6bad9154773a112baf3649f128d
    
    //5. 라우터로 들어오는 값에 처리
    const {category}=useParams();
    
    const query=(category || 'all')==='all'?'':`&category=${category}`; 
    //category가 없거나 undefined이면 all로 할당됨




    //2. useEffect에서 화면로딩시 데이터처리

    const [data, setData] = useState();


    useEffect(() => { //useEffect는 내장함수이므로 그대로 사용하고, 안에 즉시실행함수 만들어서 async await 사용
        (async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c60ca6bad9154773a112baf3649f128d`;
            let { data: { articles } } = await axios.get(url);
            setData(articles);
            setLoading(true);
        })()
    }, [query] ) //6.변화가 일어날때 마다 재실행할 변수

    //3. 데이터 로딩처리 (데이터가 오기전에 state는 undefined)
    const[loading, setLoading] = useState(false);
    if(loading===false){
        return <div>로딩중</div>
    }

    //4.li태그를 컴포넌트로 변경

    return (
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    /* 1.url,urlToImage,title,author,description,publishedAt */
                    data.map((item, index) =><NewsArticle key={index+1} item={item}/>)
                    /* 중간에 깨져있는 건 보낼 때 깨진 것. 복구가안됨 */
                }
            </ul>
        </div>
    )
}

export default NewsList;