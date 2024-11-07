import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect } from "react";
import React, { useState } from 'react';


const GagdgetCards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [gadgets, setGadgets] = useState([])
    useEffect (() => {
        if(category){
            const filteredByCategory = [...data].filter(gadget=> gadget.category === category
            )
            setGadgets(filteredByCategory)
        }else{setGadgets(data)}
    }, [category, data])
    console.log(data)
    return (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
            gadgets.map(gadget => (
                <Card key={gadget.id} gadget={gadget}/>
             ))}
            
        </div>
    );
};

export default GagdgetCards;