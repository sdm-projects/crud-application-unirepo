export interface User {
    id?: string;
    name: string;
    username: string;
    password: string;
    role: string | Role;
}

export interface Role {
    id?: string;
    name: string;
}

export type createUserRequest = Omit<User, "id">;
export type createRoleRequest = Omit<Role, "id">;