import { TaskInterface } from "./Interfaces/TaskInterface";

class Task implements TaskInterface {
  constructor(
    public id: string,
    public user_id: string,
    public project_id: string,
    public description: string,
    public created_at: Date,
    public updated_at: Date,
    public priority_score: number,
    public completion_percentage: number,
    public deleted_at?: Date | null,
    public cancelled_at?: Date | null,
    public finished_at?: Date | null
  ) {}
}
