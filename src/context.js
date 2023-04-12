//context creation
//provider
//usestate hook(it has replaced consumer)
import react from "react";
import React, { useContext, useReducer, useState } from "react";
const Appcontext=React.createContext();
import { Reducer } from "react";
import Initialstate from 'react';

//to create the provider...(putting the children shows that all the data is being hold by provider)
const Provider=({children})=>{
    // const[state,setstate]=useState(initialstate);
const[state,dispatch]=useReducer(Reducer,Initialstate);
    return(
        <Appcontext.Provider value={'Rajnish tiwari'}>
            {children}
        </Appcontext.Provider>
    )
};

//creating custom hooks
const Useglobalhooks=()=>{
    return useContext(Appcontext);
}

export {Appcontext,Provider,Useglobalhooks};