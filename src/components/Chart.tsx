import { FunctionComponent } from "react";
import "./Chart.css";

const Chart: FunctionComponent = () => {
  return (
    <div className="bottom">
      <div className="chart">
        <div className="summaryheading4">
          <div className="options">
            <div className="summary">Summary</div>
            <div className="icon4">
              <div className="sales-parent">
                <div className="last-7-days">Sales</div>
                <img
                  className="fichevron-down-icon6"
                  alt=""
                  src="/fichevrondown@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="filter6">
            <div className="last-7-days">Last 7 Days</div>
            <img
              className="fichevron-down-icon7"
              alt=""
              src="/fichevrondown@2x.png"
            />
          </div>
        </div>
        <div className="graphbar">
          <div className="x-axis">
            <div className="k">100k</div>
            <div className="last-7-days">80k</div>
            <div className="last-7-days">60k</div>
            <div className="last-7-days">40k</div>
            <div className="last-7-days">20k</div>
          </div>
          <div className="bar">
            <div className="bar1">
              <div className="bar-child" />
              <div className="bar-item" />
            </div>
            <div className="last-7-days">Sept 10</div>
          </div>
          <div className="bar">
            <div className="bar1">
              <div className="bar-child" />
              <div className="bar-child1" />
            </div>
            <div className="last-7-days">Sept 11</div>
          </div>
          <div className="bar">
            <div className="bar1">
              <div className="bar-child" />
              <div className="bar-child3" />
            </div>
            <div className="last-7-days">Sept 12</div>
          </div>
          <div className="bar">
            <div className="bar1">
              <div className="bar-child" />
              <div className="bar-child5" />
            </div>
            <div className="last-7-days">Sept 13</div>
          </div>
          <div className="bar">
            <div className="bar1">
              <div className="bar-child" />
              <div className="bar-child7" />
            </div>
            <div className="last-7-days">Sept 14</div>
          </div>
          <div className="bar">
            <div className="bar1">
              <div className="bar-child" />
              <div className="bar-child9" />
            </div>
            <div className="last-7-days">Sept 15</div>
          </div>
          <div className="bar">
            <div className="bar1">
              <div className="bar-child" />
              <div className="bar-child7" />
            </div>
            <div className="last-7-days">Sept 16</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
