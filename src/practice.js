import React,{useState} from 'react';

function App(){
    const[data,setdata]=useState(null);

    const fetchdata=async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        const response=await response.json();
        setdata(data);
    }

    return(
        <div>
            <button onClick={fetchdata}>Fetch Data</button>
            {
                data&&(
                    <ul>
                        {
                            data.map(item=>(
                                <li key={item.id}>{item.title}</li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}