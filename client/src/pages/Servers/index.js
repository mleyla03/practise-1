import React, { useEffect, useState } from 'react'
import CardContent from '@mui/material/CardContent';
import Style from "./index.module.css"
import { getAllSecurity} from '../../api/requests';

const Servers= () => {
    const [ state,setState]=useState([])
    useEffect(()=>{
        getAllSecurity().then((res)=>{
            setState(res)
        })
    },[])



  return (
    <>
    <div className={Style.middle}>
        <h1>Requirements to be Immigrants</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className={Style.ends} style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"60px"}}>
        {state && state.map((news)=>{
          return <>
          <CardContent
    style={{
      width: "250px",height:"300px"
    }}
  >
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={news.imageURL} alt='' style={{width:"250px"}}/>
    </div>
    <h3 style={{background:"black",color:"white", width:"100px",display:"flex",alignItems:"center",justifyContent:"center", height:"25px",marginLeft:"-15px",marginTop:"10px", fontSize:"15px"}}>{news.title}</h3>
    <span style={{width:"100%",marginTop:"8px", textAlign:"justify",marginLeft:"-15px", fontWeight:"bold"}}>{news.names}</span>
    
    <p style={{width:"100%",marginTop:"8px", textAlign:"justify",marginLeft:"-15px", display:"block"}}>{news.texts}</p>
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <p><i class="fa-regular fa-heart"></i>{news.like} like</p>
        <p><i class="fa-regular fa-comment"></i>{news.comment}comment</p>
    </div>

 
  </CardContent>
          </>
      
        } )}
    </div>
    </>
  )
}

export default Servers
