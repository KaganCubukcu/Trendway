import { User } from "@prisma/client";

export interface UserProps {
  currentUser: User | null | undefined;
}
