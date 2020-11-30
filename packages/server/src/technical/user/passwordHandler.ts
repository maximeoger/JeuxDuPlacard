import bcrypt from 'bcrypt';

class PasswordHandler {
  pwd: string;
  saltRounds: number;

  constructor(pwd : string){
    this.pwd = pwd;
    this.saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS!);
  }

  async hash(): Promise<string> {
    return await bcrypt.hash(this.pwd, this.saltRounds)
  }

  async compare(passwordToCompare: string, userPassword: string): Promise<boolean> {
    return await bcrypt.compare(passwordToCompare, userPassword)
  }
};

export default PasswordHandler;