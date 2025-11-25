import React, { useState } from "react";
import { posts } from "../../dummyData/index.jsx";
import { Edit, MoreVertical } from "lucide-react";

const PostList = () => {
  const [showPostMenu, setShowPostMenu] = useState(null);
  const [postText, setPostText] = useState("");
  return (
    <div>
      {posts?.map((post) => (
        <div
          key={post.id}
          className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16 bg-white dark:bg-gray-900 rounded-lg p-6 mb-4"
        >
          <div className="_feed_inner_timeline_content _padd_r24 _padd_l24">
            <div className="_feed_inner_timeline_post_top flex items-start justify-between mb-4">
              <div className="_feed_inner_timeline_post_box flex gap-3">
                <div className="_feed_inner_timeline_post_box_image flex-shrink-0">
                  <img
                    src={post.avatar}
                    alt=""
                    className="_post_img w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="_feed_inner_timeline_post_box_txt">
                  <h4 className="_feed_inner_timeline_post_box_title font-semibold text-gray-800 dark:text-gray-100">
                    {post.author}
                  </h4>
                  <p className="_feed_inner_timeline_post_box_para text-sm text-gray-500 dark:text-gray-400">
                    {post.time} ·{" "}
                    <a href="#0" className="text-blue-500 hover:underline">
                      {post.privacy}
                    </a>
                  </p>
                </div>
              </div>

              <div className="_feed_inner_timeline_post_box_dropdown relative">
                <div className="_feed_timeline_post_dropdown">
                  <button
                    onClick={() =>
                      setShowPostMenu(showPostMenu === post.id ? null : post.id)
                    }
                    id="_timeline_show_drop_btn"
                    className="_feed_timeline_post_dropdown_link p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      <circle cx="12" cy="5" r="2" fill="currentColor" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <circle cx="12" cy="19" r="2" fill="currentColor" />
                    </svg>
                  </button>
                </div>

                {showPostMenu === post.id && (
                  <div
                    id="_timeline_drop"
                    className="_feed_timeline_dropdown _timeline_dropdown absolute right-0 top-full mt-2 bg-white dark:bg-gray-900 shadow-xl rounded-lg py-2 w-56 z-10 border border-gray-200 dark:border-gray-700"
                  >
                    <ul className="_feed_timeline_dropdown_list">
                      <li className="_feed_timeline_dropdown_item">
                        <a
                          href="#0"
                          className="_feed_timeline_dropdown_link w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-blue-500"
                            >
                              <path
                                d="M6 2h12v20l-6-4-6 4V2z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Save Post
                        </a>
                      </li>
                      <li className="_feed_timeline_dropdown_item">
                        <a
                          href="#0"
                          className="_feed_timeline_dropdown_link w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-blue-500"
                            >
                              <path
                                d="M12 2a6 6 0 00-6 6v5l-2 2v1h16v-1l-2-2V8a6 6 0 00-6-6z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Turn On Notification
                        </a>
                      </li>
                      <li className="_feed_timeline_dropdown_item">
                        <a
                          href="#0"
                          className="_feed_timeline_dropdown_link w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-blue-500"
                            >
                              <path
                                d="M6 6l12 12M18 6L6 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          Hide
                        </a>
                      </li>
                      <li className="_feed_timeline_dropdown_item">
                        <a
                          href="#0"
                          className="_feed_timeline_dropdown_link w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-blue-500"
                            >
                              <path
                                d="M3 17.25V21h3.75l11-11.03-3.75-3.75L3 17.25z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="_feed_timeline_dropdown_item">
                        <a
                          href="#0"
                          className="_feed_timeline_dropdown_link w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-blue-500"
                            >
                              <path
                                d="M3 6h18M10 11v6M14 11v6M5 6l1 14h12l1-14"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M9 6V4h6v2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </span>
                          Delete Post
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <h4 className="_feed_inner_timeline_post_title text-gray-800 dark:text-gray-100 mb-3">
              {post.title}
            </h4>
            <div className="_feed_inner_timeline_image mb-4 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt=""
                className="_time_img w-full h-auto"
              />
            </div>
          </div>

          <div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26 flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 px-6">
            <div className="_feed_inner_timeline_total_reacts_image flex items-center gap-2">
              <div className="flex -space-x-1">
                <span className="_react_img1 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs">
                  😊
                </span>
                <span className="_react_img w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs">
                  ❤️
                </span>
                <span className="_react_img _rect_img_mbl_none hidden sm:flex w-6 h-6 rounded-full bg-blue-500 items-center justify-center text-xs">
                  👍
                </span>
                <span className="_react_img _rect_img_mbl_none hidden sm:flex w-6 h-6 rounded-full bg-purple-500 items-center justify-center text-xs">
                  😮
                </span>
                <span className="_react_img _rect_img_mbl_none hidden sm:flex w-6 h-6 rounded-full bg-orange-500 items-center justify-center text-xs">
                  😂
                </span>
              </div>
              <p className="_feed_inner_timeline_total_reacts_para text-sm text-gray-600 dark:text-gray-400">
                {post.reactions.count}
              </p>
            </div>
            <div className="_feed_inner_timeline_total_reacts_txt flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <p className="_feed_inner_timeline_total_reacts_para1">
                <a href="#0" className="hover:underline">
                  <span className="font-medium">{post.reactions.comments}</span>{" "}
                  Comment
                </a>
              </p>
              <p className="_feed_inner_timeline_total_reacts_para2">
                <span className="font-medium">{post.reactions.shares}</span>{" "}
                Share
              </p>
            </div>
          </div>

          <div className="_feed_inner_timeline_reaction flex items-center gap-2 mb-4 pb-4 px-6">
            <button className="_feed_inner_timeline_reaction_emoji _feed_reaction _feed_reaction_active flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600">
              <span className="_feed_inner_timeline_reaction_link flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 15c1.333 1 2.667 1 4 0m-4-5h.01m7.99 0h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <span className="text-sm font-medium">Haha</span>
              </span>
            </button>
            <button className="_feed_inner_timeline_reaction_comment _feed_reaction flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400">
              <span className="_feed_inner_timeline_reaction_link flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>

                <span className="text-sm font-medium">Comment</span>
              </span>
            </button>
            <button className="_feed_inner_timeline_reaction_share _feed_reaction flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400">
              <span className="_feed_inner_timeline_reaction_link flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="18"
                    cy="5"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="6"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="18"
                    cy="19"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8.7 11.1l6.6-3.2M8.7 13.1l6.6 3.2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>

                <span className="text-sm font-medium">Share</span>
              </span>
            </button>
          </div>

          <div className="_feed_inner_timeline_cooment_area px-6">
            <div className="_feed_inner_comment_box mb-4">
              <div className="_feed_inner_comment_box_content flex gap-3">
                <div className="_feed_inner_comment_box_content_image flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/40"
                    alt=""
                    className="_comment_img w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="_feed_inner_comment_box_content_txt flex-1 flex gap-2">
                  <textarea
                    className="form-control _comment_textarea flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm"
                    placeholder="Write a comment"
                    id="floatingTextarea2"
                    rows="1"
                  />
                  <div className="_feed_inner_comment_box_icon flex gap-1">
                    <button className="_feed_inner_comment_box_icon_btn p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gray-500"
                      >
                        <path
                          d="M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z"
                          fill="currentColor"
                        />
                        <path
                          d="M19 11a7 7 0 01-14 0M12 18v4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                    <button className="_feed_inner_comment_box_icon_btn p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gray-500"
                      >
                        <rect
                          width="18"
                          height="14"
                          x="3"
                          y="5"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="9" cy="10" r="2" fill="currentColor" />
                        <path
                          d="M21 17l-5-5-4 4-2-2-4 4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="_timline_comment_main px-6">
            <div className="_previous_comment mb-3">
              <button
                type="button"
                className="_previous_comment_txt text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                View 4 previous comments
              </button>
            </div>

            <div className="_comment_main flex gap-3">
              <div className="_comment_image flex-shrink-0">
                <a href="profile.html" className="_comment_image_link">
                  <img
                    src="https://via.placeholder.com/40"
                    alt=""
                    className="_comment_img1 w-10 h-10 rounded-full object-cover"
                  />
                </a>
              </div>
              <div className="_comment_area flex-1">
                <div className="_comment_details bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 mb-2">
                  <div className="_comment_details_top">
                    <div className="_comment_name">
                      <a href="profile.html">
                        <h4 className="_comment_name_title font-semibold text-sm text-gray-800 dark:text-gray-100">
                          Radovan SkillArena
                        </h4>
                      </a>
                    </div>
                  </div>
                  <div className="_comment_status">
                    <p className="_comment_status_text text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <span>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </span>
                    </p>
                  </div>
                  <div className="_total_reactions flex items-center gap-2 mt-2">
                    <div className="_total_react flex items-center gap-1">
                      <span className="_reaction_like">
                        <span className="_reaction_like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 10v12"></path>
                            <path d="M15 5.88 14 10h7.2a2 2 0 0 1 2 2.24l-1.2 8A2 2 0 0 1 20 22H7"></path>
                            <path d="M7 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3"></path>
                          </svg>
                        </span>
                      </span>
                      <span className="_reaction_heart">
                        <span className="_reaction_heart">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-.9-.9A5.5 5.5 0 0 0 3.3 12l.9.9L12 20l7.8-7.1.9-.9a5.5 5.5 0 0 0 0-7.8Z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <span className="_total text-xs text-gray-600 dark:text-gray-400">
                      198
                    </span>
                  </div>
                </div>
                <div className="_comment_reply ml-4">
                  <div className="_comment_reply_num">
                    <ul className="_comment_reply_list flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                      <li>
                        <span className="hover:underline cursor-pointer font-medium">
                          Like
                        </span>
                      </li>
                      <li>
                        <span className="hover:underline cursor-pointer font-medium">
                          Reply
                        </span>
                      </li>
                      <li>
                        <span className="hover:underline cursor-pointer font-medium">
                          Share
                        </span>
                      </li>
                      <li>
                        <span className="_time_link">21m</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
