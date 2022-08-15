import * as Styled from './styles';

import { useState, useContext } from 'react';

import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import { AuthContext } from '../../providers/AuthProvider/index';

import { Heading } from '../../components/Heading';
import { ReturnButton } from '../../components/ReturnButton';
import { LinkComponent } from '../../components/LinkComponent';
import { TextComponent } from '../../components/TextComponent';
import { InputComponent } from '../../components/InputComponent';
import { ButtonComponent } from '../../components/ButtonComponent';

export const Auth = ({ action }) => {
  const { user, login, logout, register } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const handleGetUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleChangePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userInfo;

    if (action === 'signin') {
      login(email, password);
    } else {
      register(email, password);
    }
  };

  return (
    <Styled.Container>
      <Styled.Login>
        <Heading size="medium" as="h4">
          GODRINK
        </Heading>
        <InputComponent
          text="Email:"
          placeholder="Type your email here..."
          name="email"
          type="email"
          handleChange={handleGetUserInfo}
        />
        <Styled.PasswordContainer>
          <InputComponent
            text="Password:"
            placeholder="Type your password here..."
            name="password"
            type={showPassword ? 'text' : 'password'}
            handleChange={handleGetUserInfo}
          />
          <button onClick={handleChangePasswordVisibility}>
            {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
          </button>
        </Styled.PasswordContainer>
        <ButtonComponent
          bold={false}
          handleSubmit={handleSubmitLogin}
          type="submit"
        >
          {action === 'signin' ? 'Sign In' : 'Sign Up'}
        </ButtonComponent>
        <Styled.OtherAction>
          <TextComponent>
            {action == 'signin'
              ? 'Do not you have an account?'
              : 'Already have an account?'}
          </TextComponent>
          <LinkComponent
            link={action !== 'signin' ? '/auth/signin' : '/auth/signup'}
          >
            {action !== 'signin' ? 'Sign In' : 'Sign Up'}
          </LinkComponent>
        </Styled.OtherAction>
        {action === 'signin' && (
          <Styled.ResetPassword href="/forgot-password">
            Forgot my password
          </Styled.ResetPassword>
        )}
      </Styled.Login>
      <ReturnButton />
    </Styled.Container>
  );
};
