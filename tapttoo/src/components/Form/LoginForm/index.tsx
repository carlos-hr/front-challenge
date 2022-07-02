import Input from "../components/Input";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { passwordPlaceholder, userPlaceholder } from "./locales";
import {
  Anchor,
  Form,
  FormButtonContainer,
  Main,
  SignUpContainer,
  Title,
} from "./styled";
import Button from "../components/Button";
import { FormEvent, useState } from "react";
import useForm from "../../../hooks/useForm";
import { BASE_URL } from "../../../utils/url";

interface LoginFormProps {
  section_login: {
    title: string;
    forgot: string;
    register: string;
    register_call: string;
    login_call: string;
  };
}

const LoginForm = ({ section_login }: LoginFormProps) => {
  const { title, forgot, login_call, register, register_call } = section_login;
  const { form, onChange } = useForm({ email: "", password: "" });

  const [requestData, setRequestData] = useState({
    isCompleted: false,
    error: false,
    success: false,
    message: "",
  });

  const submitLogin = (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = form;
    const request = new Request(`${BASE_URL}/login/`);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    fetch(request, { method: "POST", body: formData })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res.Ok) {
          setRequestData({
            isCompleted: true,
            error: false,
            success: true,
            message: res.Ok,
          });
        } else {
          setRequestData({
            isCompleted: true,
            error: true,
            success: false,
            message: res.Error,
          });
        }
      })
      .catch((err) => {
        setRequestData({
          isCompleted: true,
          error: true,
          success: false,
          message: err,
        });
      });
  };

  return (
    <Main>
      <Form onSubmit={submitLogin}>
        <Title>{title}</Title>
        <div>
          <Input
            onChange={onChange}
            value={form.email}
            name="email"
            type="email"
            placeholder={userPlaceholder}
          >
            <AiOutlineUser />
          </Input>
          <Input
            onChange={onChange}
            value={form.password}
            name="password"
            type="password"
            placeholder={passwordPlaceholder}
          >
            <AiOutlineLock />
          </Input>
        </div>

        <FormButtonContainer>
          <Anchor>{forgot}</Anchor>
          <Button submit border="none" color="white" background="#2d3748">
            {login_call}
          </Button>
        </FormButtonContainer>

        <SignUpContainer>
          <p>{register}</p>
          <Button
            background="white"
            color="#2D3748"
            border="2px solid #2D3748"
            width="11.25rem"
          >
            {register_call}
          </Button>
        </SignUpContainer>
      </Form>
    </Main>
  );
};

export default LoginForm;
