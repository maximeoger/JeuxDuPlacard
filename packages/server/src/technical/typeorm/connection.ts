import { DataSource } from 'typeorm';

interface IConnectionOptions {
  dbPort: number;
  host: string;
  username: string;
  password: string;
  database: string;
}

function getConnection(opts: IConnectionOptions): Promise<DataSource> {
  const dataSource = new DataSource({
    ...opts,
    type: 'postgres',
    url: `postgresql://${opts.username}:${opts.password}@${opts.host}:${opts.dbPort}/${opts.database}`,
  });
  return dataSource.initialize();
}

export default getConnection;
