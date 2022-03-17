import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography style={{ cursor: 'pointer' }} onClick={() => navigate('/')} variant="h6" color="inherit" noWrap>
          Movie App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
