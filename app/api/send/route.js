import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>New message received from your portfolio site!</p>
                    <p></p>
                    <p>{message}</p>
                    <p>Contant me at {email}</p>
                </>
            )
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
