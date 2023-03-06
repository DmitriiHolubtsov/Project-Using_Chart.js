import { CircularProgress } from '@mui/material';
import React from 'react';

import { LoaderWrapper } from './loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  );
}
