import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Subscribers ",  
    href: "/table",
    icon: "bi bi-layout-split",
  },



  
  {
    title: "Job List ",
    href: "/Jobs",
    icon: "bi bi-layout-split",
  },
  {
    title: "SMS  ",
    href: "/Sms",
    icon: "bi bi-layout-split",
  },
  {
    title: "Jobs Of The Day  ",
    href: "/jobsOfTheDay",
    icon: "bi bi-layout-split",
  },

 
];

const Sidebar = () => {
  const { user} = useSelector((state) => state.auth);
  const navigate = useNavigate()
  console.log(user)
  if(user=== null){
    //alert('Please login to continue')
   // window.location.href = '/login'
 //navigate('/login')

}


  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}

        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
