import React from 'react'
import "/resources/css/WidgetLarge.css";

export default function WidgetLarge() {
    return (
        
        <div className="WidgetLarge">
            <h3 className="WidgetLargeTitle">
                Latest Transactions
            </h3>
            <table className="WidgetLargeTable">
                <tr className="WidgetLargeTr">
                    <th className="WidgetLargeTh">Customer</th>
                    <th className="WidgetLargeTh">Date</th>
                    <th className="WidgetLargeTh">Amount</th>
                    <th className="WidgetLargeTh">Status</th>
                </tr>
                <tr className="WidgetLargeTr">
                    <td className="WidgetLargeUser">
                        <img src="https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLargeImg" />
                   <span className="WidgetLargeName">John Doe</span>
                    </td>
                    <td className="WidgetLargeDate">25 August 2021</td>
                    <td className="WidgetLargeAmount">$122.23</td>
                    <td className="WidgetLargeStatus"></td>
                </tr>
            </table>
        </div>
        
    )
}
