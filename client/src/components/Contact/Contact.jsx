import {useState} from 'react'
import styles from './Contact.module.scss';
import { validations } from '../../util/validations';
import { TextField, Button, ButtonV2 } from "../../style";
import { useForm, Controller } from 'react-hook-form';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import axios from 'axios'


export default function Contact() {

    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        
        axios.post('http://localhost:8000/mail', { 
            email: email, 
            body: body 
        })
            .then(res => {
                console.log(res);
                alert("Message sent succesful")
            })
    }

    const { control, formState: { errors } } = useForm({ mode: 'onChange' });

    return (
        <div className={styles.contact}>
            <div className={styles.contactDetails}>
            <h1>Get in touch</h1>
                <ul>
                    <li><IconPhone size={24} /> (+94) 11 123 1234</li>
                    <li><IconMail size={24} /> auroragrande@gmail.com</li>
                    <li><IconMapPin size={24} /> No. 12/3, Street Road, City</li>
                </ul>
            </div>
            <div className={styles.contactForm}>
                <form>
                    <Controller name="name" control={control} defaultValue="" rules={validations.name}
                        render={({ field }) =>
                            <TextField {...field} type='text' placeholder='First Last' label="Full Name" variant="outlined" size="small" error={Boolean(errors.name)} helperText={errors.name?.message}
                            />
                        }
                    />
                    <Controller name="email" control={control} defaultValue="" rules={validations.email}
                        render={({ field }) =>
                            <TextField onChange={e => setEmail(e.target.value)} value={email} {...field} type='email' placeholder='Email' label="Email" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                        }
                    />
                    <Controller name="mobile" control={control} defaultValue="" rules={validations.mobile}
                        render={({ field }) =>
                            <TextField {...field} type='tel' placeholder='Mobile' label="Mobile" variant="outlined" size="small" error={Boolean(errors.mobile)} helperText={errors.mobile?.message}
                            />
                        }
                    />
                    <Controller name="message" control={control} defaultValue="" rules={validations.message}
                        render={({ field }) =>
                            <TextField onChange={e => setBody(e.target.value)} value={body} {...field} multiline maxRows={12} placeholder='Message' label="Message" variant="outlined" size="small" error={Boolean(errors.message)} helperText={errors.message?.message}
                            />
                        }
                    />
                    <ButtonV2 fullWidth onClick={handleSubmit} variant="contained" color="primary">Send</ButtonV2>
                </form>
            </div>
        </div>
    )
}
