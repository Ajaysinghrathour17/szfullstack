import React, { Suspense, lazy } from 'react'; 
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Loader from './components/Loader';
import FormNewPolicy from './components/forms/FormNewPolicy';
import NewAgent from './components/forms/NewAgent';
import Home from './pages/Home';
import Rm from './components/forms/Rm';
import Testing from './components/forms/Testing';
import Dropdown from './components/Dropdown';

const Dashboard = lazy(() => import("./pages/Dashboard")) ;
const Products = lazy(() => import("./pages/Products")) ;
const Transaction = lazy(() => import("./pages/Transaction")) ;

const Customers = lazy(() => import("./pages/Customers")) ;


const App = () => {
  return (
    <Router >
      <Suspense fallback={<Loader />} >
      <Routes>
      <Route path="/" element={<Home  />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Products />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        <Route path="/admin/customer" element={<Customers />} />
        <Route path="/admin/customer/register-insurance" element={<FormNewPolicy  />} />
        <Route path="/admin/customer/register-agent" element={<NewAgent />} />
        <Route path="/admin/customer/register-rm" element={<Rm />} />
        <Route path="/admin/customer/signup" element={<Testing />} />
        <Route path="/admin/customer/dropdown" element={<Dropdown />} />





      </Routes>
      </Suspense>
    </Router>
  )
}

export default App