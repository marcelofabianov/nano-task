import { UserInterface } from "./Interfaces/UserInterface";

class User implements UserInterface {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date | null,
    public inactivatedAt?: Date | null
  ) {}
}
