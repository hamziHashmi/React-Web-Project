import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/FirstFolders/Layout";
import Home from "./pages/FirstFolders/Home";
import About from "./pages/FirstFolders/About"
import Services from './pages/FirstFolders/Services';
import NoPage from "./pages/FirstFolders/NoPage";
import Contact from "./pages/FirstFolders/Contact";
import Blogs from "./pages/FirstFolders/Blog";
import CartPage from "./pages/CartPage/CartPage";
import SearchPage from "./pages/SearchPage/SearchPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UpdateAddress from "./Components/UpdateAddress/UpdateAddress";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import AddClub from "./Components/AddClub/AddClub";
import JoinClub from "./Components/JoinClub/JoinClub";
import PostAdvertisement from "./Components/PostAdvertisement/PostAdvertisement";
import AddProduct from "./Components/AddProduct/AddProduct";
import BuyProduct from "./Components/BuyProduct/BuyProduct";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import SuperAdmin from "./Components/SuperAdmin/SuperAdmin";
import AddBusiness from "./Components/AddBusiness/AddBusiness";
import AddSchool from "./Components/AddSchool/AddSchool";
import AddStudent from "./Components/AddStudent/AddStudent";
import BusinessProfile from "./Components/BusinessProfile/BusinessProfile";
import AdminProfile from "./Components/AdminProfile/AdminProfile";
import MainHeader from "./pages/FirstFolders/Mainheader";
import FirstMenu from "./pages/FirstFolders/FirstMenu/FirstMenu";
import SecondMenu from "./pages/FirstFolders/SecondMenu/SecondMenu";
import CheckOutOrder from "./Components/CheckOutOrder/CheckOutOrder";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={[<About />]} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
          <Route path="AddClub" element={<AddClub />} />
          <Route path="PostAdvertisement" element={<PostAdvertisement />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="BuyProduct" element={<BuyProduct />} />
          <Route path="SuperAdmin" element={<SuperAdmin />} />
          <Route path="AddBusiness" element={<AddBusiness />} />
          <Route path="AddSchool" element={<AddSchool />} />
          <Route path="AddStudent" element={<AddStudent />} />
        </Route>

        <Route path="/" element={<MainHeader />}>
          <Route path="CartPage" element={<CartPage />} />
          <Route path="SearchPage" element={<SearchPage />} />
          <Route path="JoinClub" element={<JoinClub />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="BusinessProfile" element={<BusinessProfile />} />
          <Route path="ProfilePage" element={<ProfilePage />} />
          <Route path="CheckOutOrder" element={<CheckOutOrder />} />
        </Route>

        <Route path="/" element={<FirstMenu />}>
          <Route path="AdminProfile" element={<AdminProfile />} />
        </Route>

        <Route path="/" element={<SecondMenu />}>
          <Route path="UpdateAddress" element={<UpdateAddress />} />
          <Route path="UpdateProfile" element={<UpdateProfile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
