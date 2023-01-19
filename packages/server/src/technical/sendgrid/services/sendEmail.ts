import sgMail from '@sendgrid/mail';

export default async function sendEmail(msg: any) {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log('ERREUR');
  }
}
