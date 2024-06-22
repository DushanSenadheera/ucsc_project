import AuthLayout from "../../layout/AuthLayout";
import axios from 'axios'
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, ButtonV2 } from "../../style";
import styles from './AdminLogin.module.scss';
import usePost from '../../hooks/usePost';
import { validations } from '../../util/validations';

export default function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { data, loading, error, postData } = usePost("http://localhost:8000/adminLogin");
    const { control, formState: { errors } } = useForm({ mode: 'onSubmit' });

    // const navigate = useNavigate();

   

        const handleSubmit = () => {
             axios.post('http://localhost:8000/adminLogin', {
        email: email,
        password: password
    })
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem('adminToken', response.status);
                window.location.href = '/admin/dashboard';
            }
        })
        .catch((error) => {
            console.log(error);
        });
        }
    // const onSubmit = () => {
    //     postData({
    //         email: email,
    //         password: password,
    //     });

        // if (data) {
        //     // localStorage.setItem('adminToken', data.token);
        //     window.location.href = '/admin/dashboard';
        // }
        // window.location.href = '/admin/';
    // };

    return (
        <AuthLayout>
            <div className={styles.adminLogin}>
                <form>
                <h3>Admin Login</h3>
                    <Controller name="email" control={control} defaultValue="" rules={validations.email}
                        render={({ field }) =>
                            <TextField {...field} onChange={(e) => { setEmail(e.target.value); field.onChange(e); }} value={email} type="email" label="Email" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                        }
                    />
                    <Controller name="password" control={control} defaultValue="" rules={validations.password}
                        render={({ field }) =>
                            <TextField {...field} onChange={(e) => { setPassword(e.target.value); field.onChange(e); }} value={password} type="password" label="Password" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
                        }
                    />
                    <ButtonV2 onClick={handleSubmit()} variant="contained" color="primary" size="large">Login</ButtonV2>
                </form>
            </div>
        </AuthLayout>
    )
}
