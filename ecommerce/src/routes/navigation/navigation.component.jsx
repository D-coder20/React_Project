import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrawnLogo } from "../../assests/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrawnLogo className="logo" />
        </Link>
        <div className="nav-links-container"></div>
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/auth">
          Sign-in
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
