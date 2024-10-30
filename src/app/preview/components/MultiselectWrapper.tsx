"use client"

import React from 'react';
import { FormProvider } from './FormContext'; // Import the context provider
import MultiStepForm from './MultiStepForm'; // Your multi-step form component
import PreviewPage from "./Preview";

const MultiselectWrapper = () => {
  return (
    <FormProvider> {/* Wrap your form in the FormProvider */}
      
      <PreviewPage/> 
    </FormProvider>
  );
};

export default MultiselectWrapper;
