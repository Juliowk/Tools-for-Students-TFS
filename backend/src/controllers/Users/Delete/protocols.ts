export interface IDeleteRepository {
  deleteUser(id: string): Promise<void>;
  verifyUser(id: string): Promise<boolean>;
  userOccupation(id: string): Promise<boolean>;
}
