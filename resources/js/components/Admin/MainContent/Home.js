import React from 'react'
import Chart from './Chart';
import FeaturedInfo from './FeaturedInfo';
import WidgetLarge from './WidgetLarge';
import WidgetSmall from './WidgetSmall';
import "/resources/css/Home.css";
import {userData} from '/resources/DummyData'

export default function home() {
    return (
        <div className="Home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active Users" />
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}
