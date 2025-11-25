import React from "react";
import { stories } from "../../dummyData/index.jsx";

const DesktopStories = () => {
  return (
    <div className="_feed_inner_ppl_card _mar_b16">
      <div className="_feed_inner_story_arrow">
        <button type="button" className="_feed_inner_story_arrow_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="8"
            fill="none"
            viewBox="0 0 9 8"
          >
            <path
              fill="#fff"
              d="M8 4l.366-.341.318.341-.318.341L8 4zm-7 .5a.5.5 0 010-1v1zM5.566.659l2.8 3-.732.682-2.8-3L5.566.66zm2.8 3.682l-2.8 3-.732-.682 2.8-3 .732.682zM8 4.5H1v-1h7v1z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-4 gap-3">
        {stories?.map((story) => {
          const { id, hasStory, isYours, image, name } = story;
          return (
            <div key={id} className="_feed_inner_profile_story _b_radious6">
              <div className="_feed_inner_profile_story_image">
                <div
                  className={`_feed_inner_profile_story_image${
                    isYours ? "profile" : "public"
                  }_feed_inner_profile_story_image`}
                >
                  <img
                    src={image}
                    alt={name}
                    className={`${
                      isYours ? "_profile_story_img" : "_public_story_img"
                    }`}
                  />

                  {isYours ? (
                    <div className="_feed_inner_story_txt">
                      <div className="_feed_inner_story_btn">
                        <button className="_feed_inner_story_btn_link flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            fill="none"
                            viewBox="0 0 10 10"
                          >
                            <path
                              stroke="#fff"
                              strokeLinecap="round"
                              d="M.5 4.884h9M4.884 9.5v-9"
                            />
                          </svg>
                        </button>
                      </div>
                      <p className="_feed_inner_story_para">Your Story</p>
                    </div>
                  ) : (
                    <>
                      {/* ⭐ PUBLIC STORY TEXT */}
                      <div className="_feed_inner_pulic_story_txt">
                        <p className="_feed_inner_pulic_story_para">{name}</p>
                      </div>

                      {/* ⭐ PUBLIC MINI IMAGE */}
                      <div className="">
                        <div className="_feed_inner_public_mini">
                          <img
                            src={image}
                            alt={name}
                            className={`_public_mini_img ${
                              hasStory ? "border-blue-500" : "border-gray-300"
                            }`}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopStories;
