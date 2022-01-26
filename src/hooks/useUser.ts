import {disconnectUser, login} from '@/services';
import {
  selectIsLoggedIn,
  selectUser,
  selectUserError,
  selectUserStatus,
} from '@/store/user';
import {useDispatch, useSelector} from 'react-redux';
import {User} from 'sendbird';

export const useUser = () => {
  const user = useSelector(selectUser) as User;
  const userError = useSelector(selectUserError);
  const userSatus = useSelector(selectUserStatus);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const loginUser = (nickname: string) => {
    dispatch(login(nickname));
  };

  const disconnect = () => {
    dispatch(disconnectUser());
  };

  return {loginUser, disconnect, userSatus, isLoggedIn, user, userError};
};
