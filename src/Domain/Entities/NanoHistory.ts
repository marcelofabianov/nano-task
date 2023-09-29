import { NanoHistoryInterface } from './Interfaces/NanoHistoryInterface';

class NanoHistory implements NanoHistoryInterface {
  constructor(
    public id: string,
    public nano_id: string,
    public user_id: string,
    public action: string,
    public created_at: Date
  ) {}
}
