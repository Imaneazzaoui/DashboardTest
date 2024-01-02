import { FunctionComponent } from "react";
import "./OrderSummary.css";

const OrderSummary: FunctionComponent = () => {
  return (
    <div className="order-summary">
      <div className="contenu">
        <div className="recent-orders">Recent Orders</div>
        <div className="emptystate1">
          <img className="iconcontainer1" alt="" src="/iconcontainer@2x.png" />
          <div className="emptystatecontent1">
            <div className="description1">
              <div className="no-orders-yet1">No Orders Yet?</div>
              <div className="add-products-to1">
                Add products to your store and start selling to see orders here.
              </div>
            </div>
            <button className="buttons1">
              <div className="label-container2">
                <img
                  className="iconlylightheart3"
                  alt=""
                  src="/iconlylightheart@2x.png"
                />
                <div className="label2">New Product</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
