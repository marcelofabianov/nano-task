import { CycleInterface } from './Interfaces/CycleInterface';

class Cycle implements CycleInterface {
  constructor(
    public id: string,
    public user_id: string,
    public name: string,
    public description: string,
    public start_date: Date,
    public end_date: Date,
    public created_at: Date,
    public updated_at: Date,
    public deleted_at?: Date | null,
    public cancelled_at?: Date | null
  ) {}
}
