import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(req){
    const {email}=await req.json(); 
    console.log(email,"hello")
    const prisma=new PrismaClient();
    try {
        const userCheck=await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(userCheck){
            await prisma.user.delete({
                where:{
                    email:email
                }
            })
            return NextResponse.json(
                {message:"user is Delete successfully"},
                {Status:200})
        }
        else{
            return NextResponse.json(
                {message:"user is Not Available"},
                {Status:202})
        }
        
    } catch (error) {
        return NextResponse.json(
            {message:"something is Gone Wrong",error:error},
            {Status:500})
    }
 }

