export interface ProjectInterface {
  id: string;
  user_id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  canceled_at?: Date | null;
}
