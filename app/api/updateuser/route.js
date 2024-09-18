import { NextResponse } from "next/server";
 import { PrismaClient } from "@prisma/client";
export async function POST(req){
    const { currentEmail ,newEmail}=await req.json(); 
    console.log( currentEmail ,newEmail)
    const prisma=new PrismaClient();
    try {
        const userCheck=await prisma.user.findUnique({
            where:{
                email:currentEmail
            }
        })

            console.log(userCheck)

        if(userCheck){
            const updateUser = await prisma.user.update({
                where: { email:currentEmail },
                data: {
                  name:newEmail,
                },
              })
            return NextResponse.json(
                {message:"user is uPDATE successfully",masge:100},
                {status:200})
        }
        else{
            return NextResponse.json(
                {message:"user is Not Available"},
                {status:202})
        }
        
    } catch (error) {
        return NextResponse.json(
            {message:"something Wrong",error:error},
            {status:500})
    }
 }