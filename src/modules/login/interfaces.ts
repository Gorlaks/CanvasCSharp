export interface ILoginRepository {
	authentication(login: string, password: string): Promise<any>;
}

export interface ILoginService {
	login(login: string, password: string): void;
}