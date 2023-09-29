import { TaskInterface } from "./Interfaces/TaskInterface";

class Task implements TaskInterface {
  constructor(
    public id: string,
    public userId: string,
    public projectId: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date,
    public priorityScore: number,
    public completionPercentage: number,
    public deletedAt?: Date | null,
    public cancelledAt?: Date | null,
    public finishedAt?: Date | null
  ) {}
}
