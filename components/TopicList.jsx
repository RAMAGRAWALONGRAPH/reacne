// import React from 'react'
// import RemoveBtn from './RemoveBtn'
// import {HiPencilAlt} from "react-icons/hi"
// import Link from 'next/link'

// const getTopics = async() =>{
//     try{
//    const res = await fetch("http://localhost:3000/api/topics",{
//     cache: "no-store",
//    })
//    if(!res.ok){
//     throw new Error("failed to fetch topics")
//    }
   
//  return res.json();
  
   
//     }catch(error){
//         console.log("Error loading topics", error)
//     }
// }
// const TopicList = async() => {
 
//  const {topics} = await getTopics();

//   return (
//     <>
//     {topics.map((t) =>(
//     <div key={t._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5'>
//         <div>
//         <h2 className='font-bold text-2xl'>{t.title}</h2>
//         <div>{t.description}</div>
//         </div>
//         <div className='items-start'><RemoveBtn/>
//         <Link href={`/editTopic/${t._id}`}>
//             <HiPencilAlt size={24}/>
//         </Link>
//         </div>
//     </div>
//     ))}
//     </>
//   )
// }

// export default TopicList
"use client"

import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const TopicList = () => {
  const [topics, setTopics] = useState([]); // State to hold the topics

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics");

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();

        setTopics(data.topics); // Update the state with fetched data
       
      } catch (error) {
        console.error("Error loading topics", error);
      }
    };

    fetchTopics(); // Call the fetchTopics function when the component mounts
  }, [topics]);

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="items-start">
            <RemoveBtn />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
