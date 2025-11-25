import React from 'react';
import {events} from "../../dummyData/index.jsx";
import {Link} from "react-router-dom";

const Event = () => {
    return (
        <div className="_layout_left_sidebar_inner">
            <div className="_left_inner_area_event _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                <div className="_left_inner_event_content">
                    <h4 className="_left_inner_event_title _title5">
                        Events
                    </h4>
                    <Link to="#" className="_left_inner_event_link">
                        See all
                    </Link>
                </div>
                {events.map((event, index) => (
                    <div key={index}>
                        <Link to={event.href} className="_left_inner_event_card_link">
                            <div className="_left_inner_event_card">
                                <div className="_left_inner_event_card_iamge">
                                    <img src={event.image} alt={event.title} className="_card_img"/>
                                </div>
                                <div className="_left_inner_event_card_content">
                                    <div className="_left_inner_card_date">
                                        <p className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-none">
                                            {event.date}
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                            {event.month}
                                        </p>
                                    </div>
                                    <div className="_left_inner_card_txt">
                                        <h4 className="_left_inner_event_card_title">
                                            {event.title}
                                        </h4>
                                    </div>
                                </div>
                                <hr className="_underline"/>
                                <div className="_left_inner_event_bottom">
                                    <p className="_left_iner_event_bottom">
                                        {event.going} People Going
                                    </p>
                                    <span className="_left_iner_event_bottom_link">Going</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;