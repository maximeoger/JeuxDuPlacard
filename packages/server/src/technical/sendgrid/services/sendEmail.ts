import sgMail from '@sendgrid/mail';



class Email {
  private static instance : Email;

  private constructor(){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  }

  public static getInstance(): Email {
    if(!this.instance){
      this.instance = new Email();
    }
    return this.instance;
  }

  public async send(msg: any): Promise<void> {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.log(error.response.body)
    }
  }


}

const EmailInstance = Email.getInstance();

export default EmailInstance;