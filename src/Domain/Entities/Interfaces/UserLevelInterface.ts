export interface UserLevelInterface {
  id: string;
  user_id: string;
  level_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
}
