"use client"
import React from 'react'
import {useState} from 'react'

const AddTopic = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!title || !description){
            alert("please fill all the details")
            return;
        }
        try{
            const res = await fetch("http://localhost:3000/api/topics",{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description})
            })
        } catch(error){}
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="border border-slate-500 px-8 py-2" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Topic Title"/>
        <input className="border border-slate-500 px-8 py-2" type="text" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="Topic Description"/>

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Topic</button>
    </form>
  )
}

export default AddTopic