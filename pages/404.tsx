import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { usePaths } from "../src/lib/paths";

const Custom404: NextPage = () => {
  const paths = usePaths();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          404 Page not found
        </Typography>
        <Link href={paths.dashboard.$url()}>
          <a>
            Go to the Home
          </a>
        </Link>
      </Box>
    </Container>
  );
};

export default Custom404;