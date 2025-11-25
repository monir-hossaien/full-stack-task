import React from 'react';
import {suggestedPeople} from "../../dummyData/index.jsx";
import {Link} from "react-router-dom";

const SuggestedPeople = () => {
    return (
        <div className="_layout_left_sidebar_inner">
            <div className="_left_inner_area_suggest _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                <div className="_left_inner_area_suggest_content _mar_b24">
                    <h4 className="_left_inner_area_suggest_content_title _title5">
                        Suggested People
                    </h4>
                    <span className="_left_inner_area_suggest_content_txt">
                        <Link to="#0" className="_left_inner_area_suggest_content_txt_link">
                        See All
                    </Link>
                    </span>
                </div>
                {suggestedPeople.map((person, index) => (
                    <>
                        <div className="_left_inner_area_suggest_info">
                            <div key={index} className="_left_inner_area_suggest_info_box">
                                <div className="_left_inner_area_suggest_info_image">
                                    <Link to={person?.href}>
                                        <img src={person?.image} alt={person?.name} className="_info_img"/>
                                    </Link>
                                </div>
                                <div className="_left_inner_area_suggest_info_txt">
                                    <Link to={person?.href}>
                                        <h4 className="_left_inner_area_suggest_info_title">
                                            {person.name}
                                        </h4>
                                    </Link>
                                    <p className="_left_inner_area_suggest_info_para">
                                        {person?.title}
                                    </p>
                                </div>

                                <div className="_left_inner_area_suggest_info_link">
                                    <Link to="#0" className="_info_link">
                                        Connect
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>


                ))}
            </div>
        </div>
    );
};

export default SuggestedPeople;