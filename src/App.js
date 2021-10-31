
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Registration from './component/Registratration/Registration';
import NotFound from './component/NotFound/NotFound';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import ManageAllPackage from './component/Admin/ManageAllPackage';
import MyOrders from './component/Admin/MyOrders';
import AddNewPAckage from './component/Admin/AddNewPAckage';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import UpdatePackage from './component/Admin/UpdatePackage';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/home/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/managePackage">
              <ManageAllPackage></ManageAllPackage>
            </PrivateRoute>
            <PrivateRoute exact path="/packages/update/:id">
              <UpdatePackage></UpdatePackage>
            </PrivateRoute>
            <PrivateRoute exact path="/addNewPackage">
              <AddNewPAckage></AddNewPAckage>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
