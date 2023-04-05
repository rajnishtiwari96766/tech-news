import React from 'react'

const stories = () => {
    let Api="http://hn.algolia.com/api/v1/search?query=html"

    const fetchapidata=async(url)=>{
        try{
            const res=fetch()
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
      fetchapidata(Api);
    }, [])
    
  return (
      <>
      <h2>News Page...</h2>
      </>
  )
}

export default stories