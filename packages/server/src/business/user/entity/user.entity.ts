import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

interface IUserEntity {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

@Entity('user')
export class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("text", { name: "email", unique: true })
  email!: string; 

  @Column("text", { name: "first_name" })
  firstName!: string;

  @Column("text", { name: "last_name" })
  lastName!: string;

  @Column("text", { name: "password" })
  password!: string; 
}

export async function createUserEntity(userToCreate: IUserEntity): Promise<UserEntity> {
  const user = new UserEntity();
  
  if(userToCreate.id) {
    user.id = userToCreate.id
  }

  user.email = userToCreate.email.toLowerCase();
  user.firstName = userToCreate.firstName;
  user.lastName = userToCreate.lastName;
  user.password = userToCreate.password;

  return user;
}