import React, { useEffect, useState } from "react";
import './Feed.css'
import {Link} from 'react-router-dom'
import { API_KEY, value_converter } from "../../Data";
import moment from 'moment'
const Feed =({category})=>{
    const [data, setData] = useState([]);


    const fetchData = async () =>{

        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=In&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response => response.json()).then(data=>{setData(data.items); console.log(data)})        
        
    }
    
    useEffect(()=>{
        fetchData();
    },[category])


    return(
        <div className="feed">
            {data.map((item ,index)=>{
                return(
                    <Link key={index} to={`video/${item.snippet.categoryID}/${item.id}`} className="feed">
                        <div className="card">
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <h2>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>{value_converter(item.statistics.viewCount)} Views &bull; { moment(item.snippet.publishedAt).fromNow()}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Feed