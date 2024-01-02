import { FunctionComponent } from "react";
import TopNav from "../components/TopNav";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardSummaryCard from "../components/DashboardSummaryCard";
import DashboardSummaryCard2 from "../components/DashboardSummaryCard2";
import BarChart from "../components/BarChart";
import Chart from "../components/Chart";
import OrderSummary from "../components/OrderSummary";
import "./Dashboard.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard1">
      <div className="top-nav1">
        <TopNav />
        <Breadcrumbs />
      </div>
      <div className="container1">
        <div className="topcontainer">
          <DashboardSummaryCard
            icon="/icon@2x.png"
            fichevronDown="/fichevrondown@2x.png"
            sales="Sales"
            prop="₦0.00"
            active="Volume"
          />
          <DashboardSummaryCard
            icon="/icon@2x.png"
            fichevronDown="/fichevrondown@2x.png"
            sales="Customers"
            prop="0"
            active="Active"
            divOpacity="unset"
            dashboardSummaryCardFlex="1"
            dashboardSummaryCardBackgroundColor="#fff"
            dashboardSummaryCardHeight="145px"
            dashboardSummaryCardAlignSelf="unset"
            filterOpacity="unset"
            thisWeekColor="#bec0ca"
            salesColor="#8b8d97"
            divColor="#45464e"
            divColor1="#519c66"
            activeColor="#8b8d97"
            divColor2="#45464e"
            divColor3="#519c66"
          />
          <DashboardSummaryCard2 />
        </div>
        <div className="maincontent">
          <div className="left">
            <div className="top1">
              <BarChart />
              <div className="right">
                <DashboardSummaryCard
                  icon="/icon@2x.png"
                  fichevronDown="/fichevrondown@2x.png"
                  sales="All Products"
                  prop="0"
                  active="Active"
                  divOpacity="unset"
                  dashboardSummaryCardFlex="unset"
                  dashboardSummaryCardBackgroundColor="#d23565"
                  dashboardSummaryCardHeight="159px"
                  dashboardSummaryCardAlignSelf="stretch"
                  filterOpacity="0"
                  thisWeekColor="#dbdeee"
                  salesColor="#fff"
                  divColor="#fff"
                  divColor1="#dbdeee"
                  activeColor="#fff"
                  divColor2="#fff"
                  divColor3="#dbdeee"
                />
                <DashboardSummaryCard
                  icon="/icon@2x.png"
                  fichevronDown="/fichevrondown@2x.png"
                  sales="Abandoned Cart"
                  prop="0%"
                  active="Customers"
                  divOpacity="0"
                  dashboardSummaryCardFlex="unset"
                  dashboardSummaryCardBackgroundColor="#fff"
                  dashboardSummaryCardHeight="159px"
                  dashboardSummaryCardAlignSelf="stretch"
                  filterOpacity="unset"
                  thisWeekColor="#bec0ca"
                  salesColor="#cc5f5f"
                  divColor="#45464e"
                  divColor1="#519c66"
                  activeColor="#8b8d97"
                  divColor2="#45464e"
                  divColor3="#519c66"
                />
              </div>
            </div>
            <Chart />
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
