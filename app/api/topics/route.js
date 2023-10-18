import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic";

export async function POST(request){
    try{
     const {title, description} = await request.json();
        await connectMongoDB();
        await Topic.create({title, description});
        return NextResponse.json({message: "Topic Created"}, {status: 201})
   } catch(error){
    throw new Error(error)
   }
}

export async function GET(){
    try{
        console.log("GET")
      
        await connectMongoDB();
        const topics = await Topic.find(); // Retrieve topics
        return NextResponse.json({ topics });
        
   } catch(error){
    throw new Error(error)
   }
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"},{status: 200})
}