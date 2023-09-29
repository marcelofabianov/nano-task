import { ScoreInterface } from "./Interfaces/ScoreInterface";

class Score implements ScoreInterface {
  constructor(
    public id: string,
    public userId: string,
    public cycleId: string,
    public selectedDate: Date,
    public pointsWon: number,
    public pointsLost: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date | null
  ) {}
}
