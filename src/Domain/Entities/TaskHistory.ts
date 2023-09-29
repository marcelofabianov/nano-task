import { TaskHistoryInterface } from "./Interfaces/TaskHistory";

class TaskHistory implements TaskHistoryInterface {
  constructor(
    public id: string,
    public task_id: string,
    public user_id: string,
    public action: string,
    public created_at: Date
  ) {}
}
