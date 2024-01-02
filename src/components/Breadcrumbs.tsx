import { FunctionComponent } from "react";
import "./Breadcrumbs.css";

const Breadcrumbs: FunctionComponent = () => {
  return (
    <div className="breadcrumbs1">
      <div className="contnet1">
        <img className="iconlybulkhome2" alt="" src="/iconlybulkhome@2x.png" />
        <div className="item4">
          <div className="div14">/</div>
          <div className="page4">Page</div>
        </div>
        <div className="item4">
          <div className="div14">/</div>
          <div className="page4">Page</div>
        </div>
        <div className="item4">
          <div className="div14">/</div>
          <div className="page4">Page</div>
        </div>
        <div className="item4">
          <div className="div14">/</div>
          <div className="page4">Page</div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
