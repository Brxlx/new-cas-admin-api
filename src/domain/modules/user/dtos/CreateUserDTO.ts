export class CreateUserDTO {
  name: string;

  username: string;

  phone?: string;

  password: string;

  avatar?: string;

  company?: string;

  description?: string;

  email: string;

  groups?: [];

  isActive: boolean;

  isAdmin: boolean;

  isClient: boolean;
}
