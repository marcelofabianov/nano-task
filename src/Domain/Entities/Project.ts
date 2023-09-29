import { ProjectInterface } from './Interfaces/ProjectInterface';

class Project implements ProjectInterface {
  constructor(
    public id: string,
    public userId: string,
    public name: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date | null,
    public cancelledAt?: Date | null
  ) {}
}
