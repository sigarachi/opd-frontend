import { Group } from '@services/group';

export interface User {
	id: string;
	email: string;
	firstName: string;
	secondName: string;
	patronymic: string;
	groupId: string;
	vk: string;
	role: keyof typeof UserRole;
	group: Group;
}

export const UserRole = {
	student: 'Студент',
	teacher: 'Преподаватель',
	admin: 'Администратор',
	mentor: 'Ментор',
};
