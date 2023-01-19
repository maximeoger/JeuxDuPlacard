import sgMail from '@sendgrid/mail';

export default async function sendEmail(msg: any) {
  try {
    if (process.env.NODE_ENV === 'production') {
      await sgMail.send(msg);
    }
  } catch (error) {
    console.log('ERREUR');
  }
}
