import { FunctionComponent } from "react";
import "./DashboardSummaryCard2.css";

const DashboardSummaryCard2: FunctionComponent = () => {
  return (
    <div className="dashboard-summary-card1">
      <div className="summarycontainer3">
        <div className="summaryheading3">
          <img className="icon3" alt="" src="/icon@2x.png" />
          <div className="filter4">
            <div className="this-week4">This Week</div>
            <img
              className="fichevron-down-icon4"
              alt=""
              src="/fichevrondown@2x.png"
            />
          </div>
        </div>
        <div className="summarycardstats1">
          <div className="center">
            <div className="this-week4">All Orders</div>
            <div className="stats2">
              <div className="div22">0</div>
              <div className="div23">+0.00%</div>
            </div>
          </div>
          <div className="center">
            <div className="this-week4">Pending</div>
            <div className="stats2">
              <div className="div22">0</div>
              <div className="div23">+0.00%</div>
            </div>
          </div>
          <div className="center">
            <div className="this-week4">Completed</div>
            <div className="stats2">
              <div className="div22">0</div>
              <div className="div27">+0.00%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummaryCard2;
