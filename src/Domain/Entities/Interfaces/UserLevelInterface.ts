export interface UserLevelInterface {
  id: string;
  userId: string;
  levelId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
