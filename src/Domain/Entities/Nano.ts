import { NanoInterface } from './Interfaces/NanoInterface';

export class Nano implements NanoInterface {
  constructor(
    public id: string,
    public user_id: string,
    public task_id: string,
    public description: string,
    public estimated_hours: number,
    public planned_start: Date,
    public created_at: Date,
    public updated_at: Date,
    public exceeded_days: boolean,
    public priority_score: number,
    public completion_percentage: number,
    public real_hours?: number | null,
    public started_at?: Date | null,
    public paused_at?: Date | null,
    public finished_at?: Date | null,
    public canceled_at?: Date | null,
    public deleted_at?: Date | null
  ) {}
}
