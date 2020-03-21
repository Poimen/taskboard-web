import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import actions from 'store/reducers/actions/creators';
import { useAppDispatch } from 'store/contexts/appContext';
import { actions } from 'store/reducers';

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
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

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
      dispatch(actions.setUser({ id: 1, username: 'Anton Ego' }, true));
      // dispatch({ type: 'SET_USER' });
      history.push('/dashboard');
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
