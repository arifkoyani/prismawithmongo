import {NextResponse} from "next/server"
import { PrismaClient } from "@prisma/client";


export async function POST(req) {
    const {email}=await req.json();
    const prisma=new PrismaClient();
    try {
        const user= await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        console.log(user)
        if(user){
            return NextResponse.json({
                message:"user found"
            ,user:user},{status:200})
        }
        else{
            return NextResponse.json({message:"user Not found"},{status:404})
        }
        
    } catch (error) {
        return NextResponse.json({
            message:"sth Wrng"
        },{status:500})
    }
    
}