export interface UserInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  inactivated_at?: Date | null;
}
