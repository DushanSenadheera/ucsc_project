import { validations } from '../../util/validations';
import { TextField, Button } from "../../style";
import { useForm, Controller } from 'react-hook-form';

export default function Settings() {

  const { handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange' });
  
  return (
    <div>
        <form>
          <Controller name="name" control={control} defaultValue="" rules={validations.email}
            render={({ field }) =>
              <TextField {...field} placeholder='First Last' type="text" label="Full Name" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
              />
            }
          />
          <Controller name="email" control={control} defaultValue="" rules={validations.email}
            render={({ field }) =>
              <TextField {...field} type="email" label="Email" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
              />
            }
          />
          <Controller name="mobile" control={control} defaultValue="" rules={validations.password}
            render={({ field }) =>
              <TextField {...field} type="tel" label="Mobile" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
            }
          />
          </form>
    </div>
  )
}
