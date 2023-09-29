import { NanoHistoryInterface } from './Interfaces/NanoHistoryInterface';

class NanoHistory implements NanoHistoryInterface {
  constructor(
    public id: string,
    public nanoId: string,
    public userId: string,
    public action: string,
    public createdAt: Date
  ) {}
}
