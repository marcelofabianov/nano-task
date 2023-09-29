import { ScoreInterface } from "./Interfaces/ScoreInterface";

class Score implements ScoreInterface {
  constructor(
    public id: string,
    public user_id: string,
    public cycle_id: string,
    public selected_date: Date,
    public points_won: number,
    public points_lost: number,
    public created_at: Date,
    public updated_at: Date,
    public deleted_at?: Date | null
  ) {}
}
