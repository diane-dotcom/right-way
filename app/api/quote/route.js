import { Resend } from 'resend';

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, address, message, sourcePage } = data;

    if (!firstName || !lastName || !email || !phone) {
      return Response.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const to = process.env.LEAD_TO_EMAIL;
    const html = `
      <h2>New quote request from rightwaypest.com</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address || '(not provided)'}</p>
      <p><strong>Message:</strong> ${message || '(not provided)'}</p>
      <p><strong>Submitted from:</strong> ${sourcePage || 'unknown page'}</p>
    `;

    const { error } = await resend.emails.send({
      from: 'RightWay Website <onboarding@resend.dev>',
      to: [to],
      replyTo: email,
      subject: `New Quote Request: ${firstName} ${lastName} (${phone})`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ ok: false, error: 'Email send failed' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Quote route error:', err);
    return Response.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}
