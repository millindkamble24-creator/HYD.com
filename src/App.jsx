import { Routes,Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from './pages/HomePage';
import {ProductPage} from './pages/ProductPage';

function App() {
  return (
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />}/>
      <Route path="/product/:name" element={<ProductPage />} />
      </Route>
      </Routes>

  );
}

export default App
