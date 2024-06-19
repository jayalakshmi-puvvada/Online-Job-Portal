import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); 
  };
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/user/admin/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register Admin</b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/admin/job/category/add"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color"> Add Category</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/admin/job/category/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Categories</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="admin/job/all" class="nav-link active" aria-current="page">
          <b className="text-color">Jobs</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/admin/job/application/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color"> Job Applications</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/admin/employee/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Candidates</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/admin/employer/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Employers</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
