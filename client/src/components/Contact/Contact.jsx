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
            <h1>Contact Us</h1>
            <div className={styles.contactForm}>
                <ul>
                    <li>telephone</li>
                    <li>email</li>
                    <li>address</li>
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
                </form>
            </div>
        </div>
    )
}
