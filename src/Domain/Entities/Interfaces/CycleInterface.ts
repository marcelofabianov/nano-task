export interface CycleInterface {
  id: string;
  user_id: string;
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  canceled_at?: Date | null;
}
