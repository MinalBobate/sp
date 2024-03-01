import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate} from "react-router-dom"
// Define Yup schema for Step-2 form validation
const schema = yup.object().shape({
  address: yup.string().optional(),
  state: yup.string().optional(),
  city: yup.string().optional(),
  country: yup.string().required('Country is required'),
  pincode: yup.number().optional().typeError('Pincode must be a number')
});

const Step2Form = ({ }) => {
    const navigate=useNavigate();
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const submitStep2 = () => {
console.log("form 2 is submitted");
navigate('/')
  };

  return (
    <form onSubmit={handleSubmit(submitStep2)}>
      <Controller
        name="address"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Address"
            fullWidth
          />
        )}
      />
      <Controller
        name="state"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="State"
            fullWidth
          />
        )}
      />
      <Controller
        name="city"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="City"
            fullWidth
          />
        )}
      />
      <Controller
        name="country"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Country"
            fullWidth
            error={!!errors.country}
            helperText={errors.country?.message}
          />
        )}
      />
      <Controller
        name="pincode"
        control={control}
        
        render={({ field }) => (
          <TextField
            {...field}
            label="Pincode"
            type="number"
            fullWidth
            error={!!errors.pincode}
            helperText={errors.pincode?.message}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default Step2Form;
