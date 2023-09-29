export interface LevelInterface {
  id: string;
  name: string;
  level: number;
  milestonePoints: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
