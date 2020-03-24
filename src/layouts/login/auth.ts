import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setUser } from 'store/reducers/authenticatedUser/userReducer';
import { useDispatch } from 'react-redux';
import { useAuthService } from 'services/auth/authService';

type Auth = {
  userName: string,
  password: string
};

function validateRequired(v: string) {
  return v !== null && /\S/.test(v);
}

function isValidForSubmission(state: Auth) {
  return validateRequired(state.userName) &&
    validateRequired(state.password);
}

function useAuthValidation(initialState: Auth = { userName: '', password: '' }) {
  const [authState, setAuthState] = useState(initialState);
  const [authInProgress, setAuthInProgress] = useState(false);
  const [authError, setAuthError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { performAuth } = useAuthService();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAuthState({
      ...authState,
      [e.target.name]: e.target.value
    });
  }

  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
  }

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setAuthInProgress(true);
    setAuthError(false);

    if (isValidForSubmission(authState)) {
      performAuth(dispatch, history);
      // dispatch(setUser({ id: 1, username: 'Anton Ego' }, true));
      // history.push('/dashboard');
    } else {
      setAuthError(true);
      setAuthInProgress(false);
    }
  }

  return [
    handleChange,
    handleBlur,
    handleSubmit,
    authState,
    authInProgress,
    authError
  ];
}

export default useAuthValidation;
