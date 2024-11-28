
export interface ILoginUserRes {
  token: string;
    user: IUser;
}


export interface IUser {
    id?: number,
    first_name: string,
    last_name: string,
    email: string,
    phone?: string | null,
    dob?: string | null,
    gender?: string | null,
    address?: string | null,
    created_at?: string,
    role?: string,
    password?: string,
}