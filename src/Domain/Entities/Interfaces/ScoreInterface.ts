export interface ScoreInterface {
  id: string;
  userId: string;
  cycleId: string;
  selectedDate: Date;
  pointsWon: number;
  pointsLost: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
