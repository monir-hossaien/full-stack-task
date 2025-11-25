import React from 'react';
import {friends} from "../../dummyData/index.jsx";
import {Link} from "react-router-dom";


const FriendList = () => {

    return (
        <div className="_layout_right_sidebar_inner">
            <div className="_feed_right_inner_area_card  _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                <div className="_feed_top_fixed">
                    <div className="_feed_right_inner_area_card_content _mar_b24">
                        <h4 className="_feed_right_inner_area_card_content_title _title5">Your Friends</h4>
                        <span className="_feed_right_inner_area_card_content_txt">
													<Link
                                                        to="find-friends.html"
                                                        className="_feed_right_inner_area_card_content_txt_link"
                                                       >See All</Link>
												</span>
                    </div>
                    <form className="_feed_right_inner_area_card_form">
                        <svg
                            className="_feed_right_inner_area_card_form_svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            fill="none"
                            viewBox="0 0 17 17"
                        >
                            <circle cx="7" cy="7" r="6" stroke="#666" />
                            <path stroke="#666" strokeLinecap="round" d="M16 16l-3-3" />
                        </svg>
                        <input className="form-control me-2 _feed_right_inner_area_card_form_inpt" type="search"
                               placeholder="input search text" aria-label="Search"/>
                    </form>
                </div>
                <div className="_feed_bottom_fixed">

                    {friends.map((friend) => (
                        <div
                            key={friend.id}
                            className={`_feed_right_inner_area_card_ppl ${!friend.online ? '_feed_right_inner_area_card_ppl_inactive' : ''} flex items-center justify-between py-3 px-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer`}
                        >
                            <div className="_feed_right_inner_area_card_ppl_box flex items-center gap-3 flex-1">
                                <div className="_feed_right_inner_area_card_ppl_image flex-shrink-0 relative">
                                    <Link to="profile.html">
                                        <img src={friend.image} alt="" className="_box_ppl_img w-10 h-10 rounded-full object-cover" />
                                    </Link>
                                    {friend.online && (
                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                                    )}
                                </div>
                                <div className="_feed_right_inner_area_card_ppl_txt flex-1 min-w-0">
                                    <Link to="profile.html">
                                        <h4 className="_feed_right_inner_area_card_ppl_title text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-500 truncate">
                                            {friend.name}
                                        </h4>
                                    </Link>
                                    <p className="_feed_right_inner_area_card_ppl_para text-xs text-gray-500 dark:text-gray-400 truncate">
                                        {friend.title}
                                    </p>
                                </div>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_side flex-shrink-0">
                                {friend.online ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
                                        <rect width="12" height="12" x="1" y="1" fill="#0ACF83" stroke="#fff" strokeWidth="2" rx="6" />
                                    </svg>
                                ) : (
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{friend.time}</span>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default FriendList;