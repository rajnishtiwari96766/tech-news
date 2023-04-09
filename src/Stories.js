import React ,{useEffect} from 'react'

import { json } from 'react-router-dom'

const Stories = () => {
    let isLoading=true;

    let Api="http://hn.algolia.com/api/v1/search?query=html"

    const fetchapidata=async(url)=>{
        try{
            const res=await fetch(url)
            const data=await res.json();
            console.log(data); 
            isLoading=false;
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
      fetchapidata(Api);
    }, [])
    
    if(isLoading){
        return(
            <>
            <h1>Loading...</h1>
            </>
        )
    }
  return (
      <>
      <h2>News Page...</h2>
      </>
  )
}

export default Stories;