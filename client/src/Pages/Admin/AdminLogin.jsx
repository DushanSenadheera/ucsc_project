import AuthLayout from "../../layout/AuthLayout";
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from "../../style";
import styles from './AdminLogin.module.scss';
import usePost from '../../hooks/usePost';
import { validations } from '../../util/validations';

export default function AdminLogin() {

    const { data, loading, error, postData } = usePost();
    const { handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange' });

  const onSubmit = () => {
    postData({
      email: '',
      password: '',
    });
  };

    return (
        <AuthLayout>
            <div className={styles.adminLogin}>
                <h1>Admin Login</h1>
                <form>
                    <Controller name="email" control={control} defaultValue="" rules={validations.email}
                        render={({ field }) =>
                            <TextField {...field} type="email" label="Email" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                        }
                    />
                    <Controller name="password" control={control} defaultValue="" rules={validations.password}
                        render={({ field }) =>
                            <TextField {...field} type="password" label="Password" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
                        }
                    />
                    <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary" size="large">Login</Button>
                </form>
            </div>
        </AuthLayout>
    )
}
