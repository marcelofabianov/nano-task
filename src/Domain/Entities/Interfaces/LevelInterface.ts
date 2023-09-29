export interface LevelInterface {
  id: string;
  name: string;
  level: number;
  milestone_points: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
}
