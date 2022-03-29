import { v4 as uuidV4 } from "uuid";

class User {
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: string;
  updated_at: string;
}

export { User };
