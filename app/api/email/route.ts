import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req : NextRequest){
    const data = await req.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: "tynoemaisyry@gmail.com",
            pass: "nomh nmnx ujva ouht"
        }
    });
    
    const mailOptions = {
        from: "tynoemaisyry@gmail.com",
        to: "maisiriquinton@gmail.com",
        subect: "Reply",
        text: "Welcome To Campus Journal Lets continue to spread knowledge and enlighten the world!"
    
    }
    
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            return false
        }else{
            return Response.json({message: true})
        }
    })
}
