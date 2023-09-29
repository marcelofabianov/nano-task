export interface NanoInterface {
  id: string;
  userId: string;
  taskId: string;
  description: string;
  estimatedHours: number;
  realHours?: number | null;
  plannedStart: Date;
  startedAt?: Date | null;
  pausedAt?: Date | null;
  finishedAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  exceededDays: boolean;
  priorityScore: number;
  completionPercentage: number;
}
