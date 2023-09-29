export interface UserInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  inactivatedAt?: Date | null;
}
