import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';
import React from 'react'
import "/resources/css/FeaturedInfo.css";

export default function FeaturedInfo() {
    return (
       <div className="Featured">
           <div className="featuredItem">
               <span className="featuredTitle">New Customers</span>
               <div className="featuredStatContainer">
                   <span className="featuredStat"> 🕴 400</span>
                   <span className="featuredStatRate">
                       -13 <ArrowDownwardOutlined className="featuredIcon negative"/>
                   </span>
               </div>
               <span className="featuredSub">Compared to last month</span>
           </div>
           <div className="featuredItem">
               <span className="featuredTitle">Sales</span>
               <div className="featuredStatContainer">
                   <span className="featuredStat"> $4230</span>
                   <span className="featuredStatRate">
                       +2.4 <ArrowUpwardOutlined className="featuredIcon"/>
                   </span>
               </div>
               <span className="featuredSub">Compared to last month</span>
           </div>
           <div className="featuredItem">
               <span className="featuredTitle">Cost</span>
               <div className="featuredStatContainer">
                   <span className="featuredStat"> $2034</span>
                   <span className="featuredStatRate">
                       -12 <ArrowDownwardOutlined className="featuredIcon negative"/>
                   </span>
               </div>
               <span className="featuredSub">Compared to last month</span>
           </div>
       </div>
    )
}
