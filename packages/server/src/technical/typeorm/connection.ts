import dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

const opts: DataSourceOptions = {
  port: Number(process.env.DB_PORT)!,
  host: process.env.DB_HOST!,
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  type: 'postgres',
  url: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
};

class DatabaseConnection {
  private static instance: DataSource;

  public static getConnection(): DataSource {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DataSource(opts);
    }
    return DatabaseConnection.instance;
  }
}

const connection = DatabaseConnection.getConnection();

export default connection;
