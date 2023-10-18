"use client"
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from "next/navigation";

const RemoveBtn = ({id}) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method : 'DELETE'
      });
      if (!res.ok) {
        throw new Error("failed to delete the topic");
      }
        if (res.ok) {
          router.refresh();
        }
      
      
    } catch (error) {
      console.log("Error while deleting the topic", error);
    }
  };
  return (

    <div onClick={handleDelete} className='text-red-400'><HiOutlineTrash/></div>
  )
}

export default RemoveBtn