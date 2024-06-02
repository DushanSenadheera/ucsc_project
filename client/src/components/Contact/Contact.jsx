import styles from './Contact.module.scss';
import { validations } from '../../util/validations';
import { TextField, Button } from "../../style";
import { useForm, Controller } from 'react-hook-form';

export default function Contact() {

    const { handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange' });

    const onSubmit = () => {
        postData({
            email: '',
            password: '',
        });
    };

    return (
        <div className={styles.contact}>
            <div className={styles.contactDetails}>
            <h1>Contact Us</h1>
                <ul>
                    <li>(+94) 11 123 1234</li>
                    <li>auroragrande@gmail.com</li>
                    <li>No. 12/3, Street Road, City</li>
                </ul>
            </div>
            <div className={styles.contactForm}>
                <form>
                    <Controller name="name" control={control} defaultValue="" rules={validations.email}
                        render={({ field }) =>
                            <TextField {...field} type='text' placeholder='First Last' label="Full Name" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                        }
                    />
                    <Controller name="name" control={control} defaultValue="" rules={validations.email}
                        render={({ field }) =>
                            <TextField {...field} type='email' placeholder='Email' label="Email" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                        }
                    />
                    <Controller name="name" control={control} defaultValue="" rules={validations.email}
                        render={({ field }) =>
                            <TextField {...field} type='tel' placeholder='Mobile' label="Mobile" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                        }
                    />
                    <Controller name="name" control={control} defaultValue="" rules={validations.email}
                        render={({ field }) =>
                            <TextField {...field} multiline maxRows={12} placeholder='Message' label="Message" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                        }
                    />
                    <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">Send</Button>
                </form>
            </div>
        </div>
    )
}
