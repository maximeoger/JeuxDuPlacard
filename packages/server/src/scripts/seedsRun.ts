import { createConnection } from '../technical/typeorm/connexion';
import { base } from '../technical/typeorm/seeds';

async function main() {
  const connection = await createConnection(error => {
    console.log(error);
    process.exit(1);
  });

  const queryRunner = connection.createQueryRunner();
  for(const seed of base) {
    await seed.run(queryRunner);
  }
};

main()
  .then(() => {
    console.info('Seeds running');
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  })