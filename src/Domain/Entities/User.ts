import { UserInterface } from "./Interfaces/UserInterface";

class User implements UserInterface {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public created_at: Date,
    public updated_at: Date,
    public deleted_at?: Date | null,
    public inactivated_at?: Date | null
  ) {}
}
