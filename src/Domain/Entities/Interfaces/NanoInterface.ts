export interface NanoInterface {
  id: string;
  user_id: string;
  task_id: string;
  description: string;
  estimated_hours: number;
  real_hours?: number | null;
  planned_start: Date;
  started_at?: Date | null;
  paused_at?: Date | null;
  finished_at?: Date | null;
  canceled_at?: Date | null;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  exceeded_days: boolean;
  priority_score: number;
  completion_percentage: number;
}
