// styles.js
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Container = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledErrorMessage = styled.div`
  color: red;
  margin-bottom: 16px;
  font-size: 14px;
`;

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log(values);
    // handle form submission
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field as={Input} type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={StyledErrorMessage} />
              <Field as={Input} type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component={StyledErrorMessage} />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </Button>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Container>
  );
};

export default Login;
