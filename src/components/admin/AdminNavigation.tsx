import { Link } from "react-router-dom";

const AdminNavigation = () => {
  return (
    <nav className="navigation navigation-admin">
      <div className="logo">
        <Link to="admin">
          <img
            alt="Logo"
            src="http://www.tresbrinde.com/ima_base/logo_topo.gif"
          />
        </Link>
      </div>
      <ul className="navigation-menu">
        <li className="navigation-menu-item">User</li>
      </ul>
    </nav>
  );
};

export default AdminNavigation;
