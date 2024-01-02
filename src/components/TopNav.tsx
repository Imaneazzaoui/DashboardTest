import { FunctionComponent } from "react";
import "./TopNav.css";

const TopNav: FunctionComponent = () => {
  return (
    <div className="topnav1">
      <div className="navcontainer1">
        <div className="dashboard2">Dashboard</div>
        <div className="profile1">
          <button className="button1">
            <div className="button2">
              <img
                className="vuesaxboldnotification-icon2"
                alt=""
                src="/vuesaxboldnotification@2x.png"
              />
            </div>
            <div className="badge3">
              <b className="badge4">1</b>
            </div>
          </button>
          <div className="name">
            <div className="name-inner">
              <div className="anima-agrawal-group">
                <div className="anima-agrawal1">Anima Agrawal</div>
                <div className="company-llc1">Company LLC</div>
              </div>
            </div>
            <div className="avatar-image1">
              <img className="wing-1-icon1" alt="" src="/wing-1@2x.png" />
              <div className="base1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
