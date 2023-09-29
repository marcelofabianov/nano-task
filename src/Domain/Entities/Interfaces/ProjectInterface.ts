export interface ProjectInterface {
  id: string;
  userId: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  canceledAt?: Date | null;
}
