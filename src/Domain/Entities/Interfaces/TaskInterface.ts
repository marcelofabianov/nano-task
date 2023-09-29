export interface TaskInterface {
  id: string;
  user_id: string;
  project_id: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  canceled_at?: Date | null;
  finished_at?: Date | null;
  priority_score: number;
  completion_percentage: number;
}
