import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate("creator");

    return NextResponse.json(prompts);
  } catch (error) {
    console.error("Error fetching user prompts:", error);
    return new NextResponse("Failed to fetch prompts", { status: 500 });
  }
};

