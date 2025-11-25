import {exploreItems} from "../../dummyData/index.jsx";
import {Link} from "react-router-dom";

const ExploreItem = () => {
    return (
        <div className="_layout_left_sidebar_inner">
            <div className="_left_inner_area_explore _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                <h4 className="_left_inner_area_explore_title _title5  _mar_b24">
                    Explore
                </h4>
                <ul className="_left_inner_area_explore_list">
                    {exploreItems?.map((item, index) => (
                        <li key={index} className="_left_inner_area_explore_item _explore_item">
                            <Link to={item?.href} className="_left_inner_area_explore_link">
                                {item?.icon}
                                <span>{item?.name}</span>
                            </Link>
                            {item?.badge && (
                                <span className="_left_inner_area_explore_link_txt">
                      {item?.badge}
                    </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExploreItem;