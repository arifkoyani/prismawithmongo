import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; // Assuming you're using Prisma for database management

const prisma = new PrismaClient();

export async function DELETE(req) {
    console.log("first")
  try {
    // Instead of checking for 'deleteall', we perform the delete operation directly
    await prisma.user.deleteMany(); // This deletes all documents in the 'user' collection

    return NextResponse.json(
      { message: "All users deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
