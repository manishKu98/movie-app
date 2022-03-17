/* eslint-disable react/prop-types */
import Container from '@mui/material/Container';

export default function AppLayout({ children }) {
  return (
    <main>
      <Container sx={{ py: 2 }} maxWidth="md">
        {children}
      </Container>
    </main>
  );
}
