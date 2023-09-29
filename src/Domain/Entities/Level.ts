import { LevelInterface } from './Interfaces/LevelInterface';

class Level implements LevelInterface {
  constructor(
    public id: string,
    public name: string,
    public level: number,
    public milestonePoints: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date | null
  ) {}
}
