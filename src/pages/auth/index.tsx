import { AuthForm } from '@components/auth-form';
import { FlexLayout } from '@components/flex';
import { AuthService, LoginInfo } from '@services/auth';
import { apiSlice } from '@store/api';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const AuthPage = (): React.ReactElement => {
	const dispatch = useDispatch();

	const handleAuth = useCallback(
		async (form: LoginInfo) => {
			try {
				await AuthService.login(form);
				dispatch(apiSlice.util.invalidateTags(['MyInfo']));
			} catch (e) {
				toast.error((e as Error).message ?? 'Возникла ошибка при входе');
			}
		},
		[dispatch]
	);
	return (
		<FlexLayout height="100vh" width="100%" align="center" justify="center">
			<FlexLayout>
				<AuthForm onSubmit={handleAuth} />
			</FlexLayout>
		</FlexLayout>
	);
};
