import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem,  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Define Yup schema for Step-1 form validation
const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  age: yup.number().required('Age is required').positive('Age must be a positive number'),
  sex: yup.string().required('Sex is required').oneOf(['Male', 'Female'], 'Invalid sex'),
  mobile: yup.string().required('Mobile is required').matches(/^[6-9]\d{9}$/, 'Invalid mobile number'),
  govtIdType: yup.string().required('Govt Issued ID Type is required').oneOf(['Aadhar', 'PAN'], 'Invalid ID Type'),
  govtId: yup.string()
//   .when('govtIdType', {
//     is: ,
//     then: yup.string().matches(/^\d{12}$/, 'Invalid Aadhar number'),
//     otherwise: yup.string().matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, 'Invalid PAN number')
//   })
});

const Step1Form = ({  }) => {
    const navigate = useNavigate();
  const { handleSubmit, control, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
 

  const govtIdType = watch('govtIdType');

  const label = govtIdType === 'Aadhar' ? 'Aadhar Number' : 'PAN Number';

  const submitStep1 = () => {
   console.log("form is submitted");
   // Pass the form data to parent component for processing
   navigate('/Form2');
  };

  return (
    <form onSubmit={handleSubmit(submitStep1)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="age"
        control={control}
        // defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Age"
            type="number"
            fullWidth
            error={!!errors.age}
            helperText={errors.age?.message}
          />
        )}
      />
      <Controller
        name="sex"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.sex}>
            <InputLabel>Sex</InputLabel>
            <Select {...field}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="mobile"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Mobile"
            fullWidth
            error={!!errors.mobile}
            helperText={errors.mobile?.message}
          />
        )}
      />
      <Controller
        name="govtIdType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.govtIdType}>
            <InputLabel>Govt Issued ID Type</InputLabel>
            <Select {...field}>
              <MenuItem value="Aadhar">Aadhar</MenuItem>
              <MenuItem value="PAN">PAN</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="govtId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            fullWidth
            error={!!errors.govtId}
            helperText={errors.govtId?.message}
          />
        )}
      />
     
      <Button type="submit" variant="contained" color="primary">Next</Button>

     
    </form>
  );
};

export default Step1Form;
