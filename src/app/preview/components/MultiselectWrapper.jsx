"use client"

import React from 'react';
import { FormProvider } from './FormContext'; // Import the context provider
import MultiStepForm from './MultiStepForm'; // Your multi-step form component

const MultiselectWrapper = () => {
  return (
    <FormProvider> {/* Wrap your form in the FormProvider */}
      <MultiStepForm /> {/* MultiStepForm can now use useFormData */}
    </FormProvider>
  );
};

export default MultiselectWrapper;
