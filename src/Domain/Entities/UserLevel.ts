import { UserLevelInterface } from "./Interfaces/UserLevelInterface";

class UserLevel implements UserLevelInterface {
  constructor(
    public id: string,
    public userId: string,
    public levelId: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date | null
  ) {}
}
