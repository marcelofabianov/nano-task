import { CycleInterface } from './Interfaces/CycleInterface';

class Cycle implements CycleInterface {
  constructor(
    public id: string,
    public userId: string,
    public name: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date | null,
    public cancelledAt?: Date | null
  ) {}
}
