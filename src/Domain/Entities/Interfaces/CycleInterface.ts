export interface CycleInterface {
  id: string;
  userId: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  canceledAt?: Date | null;
}
