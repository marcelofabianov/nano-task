import { UserLevelInterface } from "./Interfaces/UserLevelInterface";

class UserLevel implements UserLevelInterface {
  constructor(
    public id: string,
    public user_id: string,
    public level_id: string,
    public created_at: Date,
    public updated_at: Date,
    public deleted_at?: Date | null
  ) {}
}
