import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from "../../style";
import Checkbox from '@mui/material/Checkbox';
import styles from './UserLogin.module.scss';
import usePost from '../../hooks/usePost';
import { validations } from '../../util/validations';

export default function UserLogin() {
  
  const { data, loading, error, postData } = usePost();
  const { handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange' });

  const onSubmit = () => {
    postData({
      email: '',
      password: '',
    });
  };

  return (
    <div className={styles.userLogin}>
      <h1>Sign In</h1>
      <form>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={validations.email}
          render={({ field }) =>
            <TextField {...field} type="email" label="Email" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
            />
          }
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={validations.password}
          render={({ field }) =>
            <TextField {...field} type="password" label="Password" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
          }
        />
        <p>
          <a href="/forgot-password">Forgot Password?</a>
        </p>
          <Checkbox color="primary" />Remember Me
        <Button type="submit" variant="contained" onClick={handleSubmit(onSubmit)}>Login</Button>
      </form>
      <small>Don't you have an account? Register from here</small>
    </div>
  );
}