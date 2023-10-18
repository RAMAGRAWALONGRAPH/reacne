import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

  
const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }
  
     const data = await res.json();
     console.log(data)
     return data;
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

const EditTopic = async({params}) => {

  const { id } = params;
 const {topic} = await getTopicById(id);
 
 const {title, description} = await topic

  return (
    
    <EditTopicForm id={id} title={title} description={description}/>
  )
}
export default EditTopic