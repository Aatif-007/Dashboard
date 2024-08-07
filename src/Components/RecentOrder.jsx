import React from "react";
import './Styles/recent.css'

const RecentOrder = () => {
    const orders = [
      {
        customer: "Wade Warren",
        orderNo: 15478256,
        amount: 124.0,
        status: "Delivered",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        customer: "Jane Cooper",
        orderNo: 48965786,
        amount: 365.02,
        status: "Delivered",
        image: "https://randomuser.me/api/portraits/women/75.jpg",
      },
      {
        customer: "Guy Hawkins",
        orderNo: 78958215,
        amount: 45.88,
        status: "Cancelled",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
      },
      {
        customer: "Kristin Watson",
        orderNo: 20965732,
        amount: 65.0,
        status: "Pending",
        image: "https://randomuser.me/api/portraits/women/76.jpg",
      },
      {
        customer: "Cody Fisher",
        orderNo: 95715620,
        amount: 545.0,
        status: "Delivered",
        image: "https://randomuser.me/api/portraits/men/74.jpg",
      },
      {
        customer: "Savannah Nguyen",
        orderNo: 78514568,
        amount: 128.2,
        status: "Delivered",
        image: "https://randomuser.me/api/portraits/women/78.jpg",
      },
    ];
    return (
      <>
        <div className=" recent-parent min-w-[57.5%] p-3  mt-5 bg-gray-700 min-h-[210px]  font-poppins rounded-md text-white  ">
          <h1 className="font-semibold text-xl">Recent Orders</h1>
          <div> 
          <table className="recent-child min-h-full4 text-sm text-gray-500 dark:text-gray-400 overflow-auto text-center">
          <thead className="recent-head text-xs text-white  bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-1">
                Customer
              </th>
              <th scope="col" className="px-4 py-1">
                Order No.
              </th>
              <th scope="col" className="px-4 py-1">
                Amount
              </th>
              <th scope="col" className="px-4 py-1">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="min-w-full">
            {orders.map((order, index) => (
              <tr key={index} className="order-map bg-gray-700 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600 text-white dark:hover:bg-gray-900">
                <td className="flex  items-center px-6 py-4">
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={order.image}
                    alt={order.customer}
                  />
                  <div className="font-medium text-white">
                    {order.customer}
                  </div>
                </td>
                <td className=" order-no px-6 py-4">{order.orderNo}</td>
                <td className=" order-amt px-6 py-4">${order.amount.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered'
                        ? 'bg-green-500 text-green-700'
                        : order.status === 'Cancelled'
                        ? 'bg-red-500 text-red-700'
                        : 'bg-red-500 text-red-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
        </div>
      </>
    );
  };
export default RecentOrder;
