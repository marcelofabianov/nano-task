import { TaskHistoryInterface } from "./Interfaces/TaskHistory";

class TaskHistory implements TaskHistoryInterface {
  constructor(
    public id: string,
    public taskId: string,
    public userId: string,
    public action: string,
    public createdAt: Date
  ) {}
}
