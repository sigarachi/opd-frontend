export interface RegisterInfo {
	email: string;
	password: string;
	vk: string;
	groupId: string;
	firstName: string;
	secondName: string;
	patronymic?: string;
}

export interface RegisterInfoWithConfirm extends RegisterInfo {
	confirmPassword: string;
}

export interface LoginInfo {
	email: string;
	password: string;
}
