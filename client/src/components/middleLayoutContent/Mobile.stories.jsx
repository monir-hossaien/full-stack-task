import React from "react";
import { mobileStories } from "../../dummyData/index.jsx";
import { Link } from "react-router-dom";

const MobileStories = () => {
  return (
    <div className="lg:hidden _feed_inner_text_area  _b_radious6 _padd_b24 _padd_t24 _padd_r24 _padd_l24 _mar_b16">
      <div className="_feed_inner_ppl_card_area">
        <ul className="_feed_inner_ppl_card_area_list">
          {mobileStories.map((story) => {
            const { id, active, isYours, image, name } = story;
            return (
              <li key={id} className="_feed_inner_ppl_card_area_item">
                <Link
                  to="#0"
                  className="_feed_inner_ppl_card_area_link block text-center"
                >
                  <div
                    className={`_feed_inner_ppl_card_area_story${
                      isYours ? "" : active ? "_active" : "_inactive"
                    } relative w-16 h-16 rounded-full ${
                      active
                        ? "ring-2 ring-blue-500"
                        : isYours
                        ? "ring-2 ring-gray-300"
                        : "ring-2 ring-gray-300"
                    } p-1 mb-1`}
                  >
                    <img
                      src={image}
                      alt={name}
                      className={`${
                        isYours ? "_card_story_img" : "_card_story_img1"
                      } w-full h-full rounded-full object-cover`}
                    />
                    {isYours && (
                      <div className="_feed_inner_ppl_btn absolute bottom-0 right-0">
                        <button
                          className="_feed_inner_ppl_btn_link w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 2.5v7M2.5 6h7"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <p
                    className={`${
                      isYours
                        ? "_feed_inner_ppl_card_area_link_txt"
                        : "_feed_inner_ppl_card_area_txt"
                    } text-xs text-gray-600 dark:text-gray-400 truncate w-16`}
                  >
                    {name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileStories;
