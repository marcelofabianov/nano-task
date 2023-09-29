import { ProjectInterface } from './Interfaces/ProjectInterface';

class Project implements ProjectInterface {
  constructor(
    public id: string,
    public user_id: string,
    public name: string,
    public description: string,
    public created_at: Date,
    public updated_at: Date,
    public deleted_at?: Date | null,
    public cancelled_at?: Date | null
  ) {}
}
