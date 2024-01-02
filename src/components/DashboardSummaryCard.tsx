import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./DashboardSummaryCard.css";

type DashboardSummaryCardType = {
  icon?: string;
  fichevronDown?: string;
  sales?: string;
  prop?: string;
  active?: string;

  /** Style props */
  divOpacity?: CSSProperties["opacity"];
  dashboardSummaryCardFlex?: CSSProperties["flex"];
  dashboardSummaryCardBackgroundColor?: CSSProperties["backgroundColor"];
  dashboardSummaryCardHeight?: CSSProperties["height"];
  dashboardSummaryCardAlignSelf?: CSSProperties["alignSelf"];
  filterOpacity?: CSSProperties["opacity"];
  thisWeekColor?: CSSProperties["color"];
  salesColor?: CSSProperties["color"];
  divColor?: CSSProperties["color"];
  divColor1?: CSSProperties["color"];
  activeColor?: CSSProperties["color"];
  divColor2?: CSSProperties["color"];
  divColor3?: CSSProperties["color"];
};

const DashboardSummaryCard: FunctionComponent<DashboardSummaryCardType> = ({
  icon,
  fichevronDown,
  sales,
  prop,
  active,
  divOpacity,
  dashboardSummaryCardFlex,
  dashboardSummaryCardBackgroundColor,
  dashboardSummaryCardHeight,
  dashboardSummaryCardAlignSelf,
  filterOpacity,
  thisWeekColor,
  salesColor,
  divColor,
  divColor1,
  activeColor,
  divColor2,
  divColor3,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      opacity: divOpacity,
      color: divColor3,
    };
  }, [divOpacity, divColor3]);

  const dashboardSummaryCardStyle: CSSProperties = useMemo(() => {
    return {
      flex: dashboardSummaryCardFlex,
      backgroundColor: dashboardSummaryCardBackgroundColor,
      height: dashboardSummaryCardHeight,
      alignSelf: dashboardSummaryCardAlignSelf,
    };
  }, [
    dashboardSummaryCardFlex,
    dashboardSummaryCardBackgroundColor,
    dashboardSummaryCardHeight,
    dashboardSummaryCardAlignSelf,
  ]);

  const filterStyle: CSSProperties = useMemo(() => {
    return {
      opacity: filterOpacity,
    };
  }, [filterOpacity]);

  const thisWeekStyle: CSSProperties = useMemo(() => {
    return {
      color: thisWeekColor,
    };
  }, [thisWeekColor]);

  const salesStyle: CSSProperties = useMemo(() => {
    return {
      color: salesColor,
    };
  }, [salesColor]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      color: divColor1,
    };
  }, [divColor1]);

  const activeStyle: CSSProperties = useMemo(() => {
    return {
      color: activeColor,
    };
  }, [activeColor]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      color: divColor2,
    };
  }, [divColor2]);

  return (
    <div className="dashboard-summary-card" style={dashboardSummaryCardStyle}>
      <div className="summarycontainer2">
        <div className="summaryheading2">
          <img className="icon2" alt="" src={icon} />
          <div className="filter3" style={filterStyle}>
            <div className="sales" style={thisWeekStyle}>
              This Week
            </div>
            <img className="fichevron-down-icon3" alt="" src={fichevronDown} />
          </div>
        </div>
        <div className="summarycardstats">
          <div className="left1">
            <div className="sales" style={salesStyle}>
              {sales}
            </div>
            <div className="stats">
              <div className="div18" style={div1Style}>
                {prop}
              </div>
              <div className="div19" style={div2Style}>
                +0.00%
              </div>
            </div>
          </div>
          <div className="left1">
            <div className="sales" style={activeStyle}>
              {active}
            </div>
            <div className="stats">
              <div className="div18" style={div3Style}>
                0
              </div>
              <div className="div21" style={divStyle}>
                +0.00%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummaryCard;
