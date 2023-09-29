import { NanoInterface } from './Interfaces/NanoInterface';

export class Nano implements NanoInterface {
  constructor(
    public id: string,
    public userId: string,
    public taskId: string,
    public description: string,
    public estimatedHours: number,
    public plannedStart: Date,
    public createdAt: Date,
    public updatedAt: Date,
    public exceededDays: boolean,
    public priorityScore: number,
    public completionPercentage: number,
    public realHours?: number | null,
    public startedAt?: Date | null,
    public pausedAt?: Date | null,
    public finishedAt?: Date | null,
    public canceledAt?: Date | null,
    public deletedAt?: Date | null
  ) {}
}
