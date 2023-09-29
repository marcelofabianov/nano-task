import { LevelInterface } from './Interfaces/LevelInterface';

class Level implements LevelInterface {
  constructor(
    public id: string,
    public name: string,
    public level: number,
    public milestone_points: number,
    public created_at: Date,
    public updated_at: Date,
    public deleted_at?: Date | null
  ) {}
}
