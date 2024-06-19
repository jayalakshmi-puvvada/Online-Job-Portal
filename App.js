import { Route, Routes } from "react-router-dom";
import AddCategoryForm from "./CategoryComponent/AddCategoryForm";
import UpdateCategoryForm from "./CategoryComponent/UpdateCategoryForm";
import ViewAllCategories from "./CategoryComponent/ViewAllCategories";
import ViewAllJobApplication from "./JobApplicationComponent/ViewAllJobApplication";
import ViewEmployeeJobApplication from "./JobApplicationComponent/ViewEmployeeJobApplication";
import ViewEmployerJobApplication from "./JobApplicationComponent/ViewEmployerJobApplication";
import ViewJobApplications from "./JobApplicationComponent/ViewJobApplications";
import AddJobForm from "./JobComponent/AddJobForm";
import JobDetailPage from "./JobComponent/JobDetailPage";
import ViewAllJobs from "./JobComponent/ViewAllJobs";
import ViewEmployerJobs from "./JobComponent/ViewEmployerJobs";
import Header from "./NavbarComponent/Header";
import AboutUs from "./PageComponent/AboutUs";
import ContactUs from "./PageComponent/ContactUs";
import HomePage from "./PageComponent/HomePage";
import AdminRegisterForm from "./UserComponent/AdminRegisterForm";
import EmployeeProfile from "./UserComponent/EmployeeProfile";
import UpdateUserProfileForm from "./UserComponent/UpdateUserProfileForm";
import UserLoginForm from "./UserComponent/UserLoginForm";
import UserRegister from "./UserComponent/UserRegister";
import ViewAllEmployees from "./UserComponent/ViewAllEmployees";
import ViewAllEmployers from "./UserComponent/ViewAllEmployers";
// import background from "./images/carousel_1.png";
// class App extends Component {
  
function App() {
  // render() {
  //   const myStyle = {
  //       backgroundImage: `url(${background})`,
  //       height: "100vh",
  //       marginTop: "-70px",
  //       fontSize: "50px",
  //       backgroundSize: "cover",
  //       backgroundRepeat: "no-repeat",
  //   };
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user/admin/register" element={<AdminRegisterForm />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/employee/register" element={<UserRegister />} />
        <Route path="/user/employer/register" element={<UserRegister />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin/job/category/add" element={<AddCategoryForm />} />
        <Route path="/admin/job/category/all" element={<ViewAllCategories />} />
        <Route
          path="/admin/job/category/update"
          element={<UpdateCategoryForm />}
        />
        <Route path="/employer/job/post" element={<AddJobForm />} />
        <Route path="/employer/job/all" element={<ViewEmployerJobs />} />
        <Route path="/admin/job/all" element={<ViewAllJobs />} />
        <Route path="/admin/employee/all" element={<ViewAllEmployees />} />
        <Route path="/admin/employer/all" element={<ViewAllEmployers />} />
        <Route path="/job/:jobId/detail" element={<JobDetailPage />} />
        <Route
          path="/employee/job/application/all"
          element={<ViewEmployeeJobApplication />}
        />
        <Route path="/employee/profile/detail" element={<EmployeeProfile />} />
        <Route
          path="/employee/profile/update"
          element={<UpdateUserProfileForm />}
        />
        <Route
          path="/employer/job/application/all"
          element={<ViewEmployerJobApplication />}
        />
        <Route
          path="/admin/job/application/all"
          element={<ViewAllJobApplication />}
        />
        <Route
          path="/job/:jobId/application/all"
          element={<ViewJobApplications />}
        />
      </Routes>
    </div>
  );
}
  


export default App;

