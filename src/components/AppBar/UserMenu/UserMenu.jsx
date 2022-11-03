import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <div>
      <p>Glad to see you, {name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
};
