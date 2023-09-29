export interface ScoreInterface {
  id: string;
  user_id: string;
  cycle_id: string;
  selected_date: Date;
  points_won: number;
  points_lost: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
}
