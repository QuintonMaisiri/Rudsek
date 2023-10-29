import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { sendMessage } from "../twilio";

type ResponseData = {
    message : string
}

export async function POST(request : NextRequest, response : NextApiResponse <ResponseData>){
    const data = await request.json()
    const msg = data.message
    sendMessage(msg)
    return msg
}

