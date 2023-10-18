"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({id, title, description}) => {
  const router = useRouter();

   const [newTitle, setNewTitle] = useState(title);
   const [newDescription, setNewDescription] = useState(description);

   const handleEdit = async (e) => {
     e.preventDefault();
     if (!title || !description) {
       alert("please fill all the details");
       return;
     }
     try {
     
       const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
         method: "PUT",
         headers: {
           "Content-type": "application/json",
         },
         body: JSON.stringify({ newTitle, newDescription}),
       });
       if (res.ok) {
         router.refresh();
         router.push("/");
       }
        
     } catch (error) {
       console.log("Error while editing the topic", error);
     }
   };

  return (
      <form onSubmit={handleEdit} className="flex flex-col gap-3">
        <input className="border border-slate-500 px-8 py-2" type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Topic Title"/>
        <input className="border border-slate-500 px-8 py-2" type="text" onChange={(e)=>setNewDescription(e.target.value)} value={newDescription} placeholder="Topic Description"/>

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Topic</button>
    </form>
  
  );
};

export default EditTopicForm;
