import Input from "../components/Input";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import Button from "../components/Button";
import {
  Form,
  Title,
  FormButtonContainer,
  LoginButtonContainer,
  ValidationMessage,
} from "../styled";
import {
  alreadyHasAccount,
  confirmPasswordPlaceholder,
  emailPlaceholder,
  loginText,
  passwordPlaceholder,
  signUpButton,
  signUpTitle,
  userPlaceholder,
} from "./locales";
import { validateForm } from "../../../utils/validateForms";
import { FormEvent } from "react";
import { gray_800 } from "../../../utils/colors";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const signUp = (e: FormEvent) => {
    e.preventDefault();
    validateForm(["user", "email", "password", "confirm-password"]);
  };

  const router = useRouter();

  return (
    <Form onSubmit={signUp} noValidate>
      <Title>{signUpTitle}</Title>
      <div>
        <Input
          id="user"
          name="user"
          type="text"
          placeholder={userPlaceholder}
          required
        >
          <AiOutlineUser />
        </Input>
        <ValidationMessage id="validation-user"></ValidationMessage>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder={emailPlaceholder}
          required
        >
          <AiOutlineMail />
        </Input>
        <ValidationMessage id="validation-email"></ValidationMessage>

        <Input
          id="password"
          name="password"
          type="password"
          placeholder={passwordPlaceholder}
          required
        >
          <AiOutlineLock />
        </Input>
        <ValidationMessage id="validation-password"></ValidationMessage>

        <Input
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder={confirmPasswordPlaceholder}
          required
        >
          <AiOutlineLock />
        </Input>
        <ValidationMessage id="validation-confirm-password"></ValidationMessage>
      </div>

      <FormButtonContainer>
        <Button
          width="20rem"
          submit
          border="none"
          color="white"
          background={gray_800}
        >
          {signUpButton}
        </Button>
      </FormButtonContainer>

      <LoginButtonContainer>
        <p>{alreadyHasAccount}</p>
        <Button
          background="white"
          color={gray_800}
          border={`2px solid ${gray_800}`}
          width="10rem"
          onClick={() => router.push("/")}
        >
          {loginText}
        </Button>
      </LoginButtonContainer>
    </Form>
  );
};

export default SignUpForm;
