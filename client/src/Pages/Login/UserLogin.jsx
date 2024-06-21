import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from "../../style";
import styles from './UserLogin.module.scss';
import usePost from '../../hooks/usePost';
import { validations } from '../../util/validations';
import AuthLayout from '../../layout/AuthLayout';
import MenuItem from '@mui/material/MenuItem';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "AcbQ3mwmjtgfvh_lAQi_H8DYamlj8EFGirqHQIZbJO2_SmVm641RqKyCq7A867YTF3sOfYv-O4818-TO",
};


export default function UserLogin() {

  const [room, setRoom] = useState(1);
  const [guest, setGuest] = useState(1);
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
      <div className={styles.userLogin}>
        <h1>Reserve</h1>
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
          <div className={styles.duration}>
            <label htmlFor='checkin'>
              <small>Check-In</small>
              <Controller name="checkin" control={control} defaultValue="" rules={validations.password}
                render={({ field }) =>
                  <TextField {...field} type="date" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
                }
              />
            </label>
            <label htmlFor='checkout'>
              <small>Check-Out</small>
              <Controller name="checkout" control={control} defaultValue="" rules={validations.password}
                render={({ field }) =>
                  <TextField {...field} type="date" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
                }
              />
            </label>
          </div>
          <div className={styles.rooms}>
            <Controller name="rooms" control={control} rules={validations.password}
              render={({ field }) =>
                <TextField onChange={(e) => { setRoom(e.target.value) }} value={room} {...field} type="number" label="Rooms" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
              }
            />
            <Controller name="adults" control={control} defaultValue="" rules={validations.password}
              render={({ field }) =>
                <TextField {...field} onChange={(e) => { setGuest(e.target.value) }} value={guest} type="number" label="Adults" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
              }
            />
            <Controller name="child" control={control} defaultValue="" rules={validations.password}
              render={({ field }) =>
                <TextField {...field} type="number" value={'0'} label="Child" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
              }
            />
          </div>
          <div className={styles.roomType}>
            {
              Array.from({ length: room }).map((_, index) => (
                <div key={index}>
                  <Controller name={`roomType${index}`} control={control} defaultValue="" rules={validations.password}
                    render={({ field }) =>
                      <TextField {...field} select label={`Room ${index + 1} Type`} variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} >
                        {(room >= guest) && <MenuItem value="Single">Single</MenuItem>}
                        {(room >= guest / 2) && <MenuItem value="Double">Double</MenuItem>}
                        {(room >= guest / 4) && <MenuItem value="Family">Family</MenuItem>}
                      </TextField>
                    }
                  />
                </div>
              ))
            }
          </div>
          {/* <Button type="submit" variant="contained" onClick={handleSubmit(onSubmit)}>Check Availability</Button> */}
          <PayPalScriptProvider options={initialOptions}>

            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: "0.01",
                       // Can dynamically set the amount based on your need
                    },
                  }],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                });
              }}
            />

          </PayPalScriptProvider>
        </form>
      </div>
    </AuthLayout>
  );
}