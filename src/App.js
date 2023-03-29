import { Copyright, ReserveTable } from "./screens/ReserveTable/ReserveTable";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home/Home';
import { Menu } from './screens/Menu/Menu';
import { CartProvider } from "./screens/Context/GeneralContext";
import { Review } from "./screens/Review/Review";
import { Booked } from "./screens/Booked/Booked";


function App() {
  return (
    <div>
      <CartProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Router>
            <Routes>
              <Route exact path="/" element={(<Home />)} />
              <Route exact path="/menu" element={(<Menu />)} />
              <Route exact path="/reserveTable" element={(<ReserveTable />)} />
              <Route exact path="/review" element={(<Review/>)} />
              <Route exact path="/booked" element={(<Booked/>)} />
            </Routes>
          </Router>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </LocalizationProvider>
      </CartProvider>
    </div>
  );
}

export default App;
