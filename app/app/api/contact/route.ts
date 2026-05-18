import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 })
    }

    await resend.emails.send({
      from: "AzhaarLight Foundation <onboarding@resend.dev>",
      to: "azhaarlight@outlook.com",
      replyTo: email,
      subject: subject ? `[Contact] ${subject}` : `[Contact] Message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d6a4f; border-bottom: 2px solid #2d6a4f; padding-bottom: 10px;">
            Nouveau message – AzhaarLight Foundation
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 120px;">Nom :</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 8px; font-weight: bold;">Email :</td>
              <td style="padding: 8px;">
                <a href="mailto:${email}" style="color: #2d6a4f;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Sujet :</td>
              <td style="padding: 8px;">${subject || "—"}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message :</td>
              <td style="padding: 8px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact du site AzhaarLight Foundation.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Erreur envoi email:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
