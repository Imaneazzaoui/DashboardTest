import { FunctionComponent } from "react";
import "./BarChart.css";

const BarChart: FunctionComponent = () => {
  return (
    <div className="barchart">
      <div className="content1">
        <div className="top2">
          <div className="marketting-group">
            <div className="marketting1">Marketting</div>
            <div className="filter5">
              <div className="this-week5">This Week</div>
              <img
                className="fichevron-down-icon5"
                alt=""
                src="/fichevrondown@2x.png"
              />
            </div>
          </div>
          <div className="keycontainer1">
            <div className="key3">
              <div className="rectangle-div" />
              <div className="this-week5">Acquisition</div>
            </div>
            <div className="key3">
              <div className="key-child1" />
              <div className="this-week5">Purchase</div>
            </div>
            <div className="key3">
              <div className="key-child2" />
              <div className="this-week5">Retention</div>
            </div>
          </div>
        </div>
        <img className="content-item" alt="" src="/group-2@2x.png" />
      </div>
    </div>
  );
};

export default BarChart;
