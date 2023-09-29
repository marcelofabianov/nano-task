export interface TaskInterface {
  id: string;
  userId: string;
  projectId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  canceledAt?: Date | null;
  finishedAt?: Date | null;
  priorityScore: number;
  completionPercentage: number;
}
