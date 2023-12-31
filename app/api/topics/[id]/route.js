import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";





await connectMongoDB();


export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    
    const result = await Topic.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({result}, {status: 200})
}

export async function GET(request, {params}){
    const {id} = params;
    // await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic}, {status : 200})
}