import React, { useEffect } from 'react'
import axios from 'axios';
export default function Home() {

  const [search, setSearch] = React.useState([])
  const [data, setData] = React.useState([])
const APIKey = "AIzaSyBEIxGVR76r6MNSnag5pe3BDE4i4U4CaGg";
  const url =`https://www.googleapis.com/youtube/v3/videos?key=${APIKey}`
useEffect(()=>{
  axios.get(`http://www.youtube.com/v/M7lc1UVf-VE?${APIKey}`).then((res)=>{
      setData(res.data)
      setSearch(res.data)
      console.log(res.data)
    })
},[])
  return (
    <div></div>
  )
}
