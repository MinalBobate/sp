import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface CheckboxFieldsProps {
  name: string;
  errors: any; // You can replace 'any' with a more specific type for errors if you have it
  control: Control<FieldValues>;
}

const CheckboxFields: React.FC<CheckboxFieldsProps> = ({ name, errors, control }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel control={<Checkbox {...field} required />} label="I Agree to MyApp Terms and Privacy Policy" />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </>
  );
};

export default CheckboxFields;
