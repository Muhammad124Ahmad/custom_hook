import React,{ useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data,setData]=useState();
  useEffect(()=>{
    fetch(url)
    .then((res)=>(
      res.json()
    ))
    .then((resData)=>{
      setData(resData);
    })
  },[])
  return [data]
}

export default useFetch
