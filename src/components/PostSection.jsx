import React, { useState } from 'react';
import Avatar from "react-avatar";
import close from '../assets/close.png'; // Ensure this is the correct path
import share from '../assets/share.png';
import comment from '../assets/comment.png';

const PostSection = () => {
  const [posts, setPosts] = useState([
    //  posts data 
    {
      id: 2,
      name: 'ferrari',
      profileImage: 'https://th.bing.com/th?id=ORMS.8edb4186515e4dd2ccb59ad243b95700&w=197&h=113&c=6&rs=2&o=6&dpr=1.5&pid=Wdp', // You can provide profile image here
      title: '',
      content: ' ',
      upvotes: 1200,
      downvotes:52 ,
      comments: 451,
      shares: 897,
      Qualifications: 'Sponsored',
      timeAgo: '',
      image: 'https://cdn.ferrari.com/cms/network/media/img/resize/6673fe6511a59b0011ec0465-laferrari_20240627_cover_1920x1080%20centered_v2?width=1080' // Dynamic image URL for each post
    },
    {
      id: 1,
      name: 'Kumal Sharma',
      profileImage: 'https://ssbcrackexams.com/wp-content/uploads/2024/11/Indian-Army_th.jpg', // You can provide profile image here
      title: 'Army',
      content: 'Serving as a Commanding Officer (CO) in the Indian Army is an honor that marks the pinnacle of a military career, bringing with it authority, prestige, and immense responsibility. A...!',
      upvotes: 3100,
      downvotes: 31,
      comments: 30,
      shares: 14,
      Qualifications: ',Movie Addict',
      timeAgo: '5d',
      image: "https://ssbcrackexams.com/wp-content/uploads/2024/11/Indian-Army_th.jpg" // Dynamic image URL for each post
    },
    
  {
    id: 2,
    name: 'ferrari',
    profileImage: 'https://th.bing.com/th?id=ORMS.8edb4186515e4dd2ccb59ad243b95700&w=197&h=113&c=6&rs=2&o=6&dpr=1.5&pid=Wdp', // You can provide profile image here
    title: '',
    content: ' ',
    upvotes: 1200,
    downvotes:52 ,
    comments: 451,
    shares: 897,
    Qualifications: 'Sponsored',
    timeAgo: '',
    image: 'https://cdn.ferrari.com/cms/network/media/img/resize/6673fe6511a59b0011ec0465-laferrari_20240627_cover_1920x1080%20centered_v2?width=1080' // Dynamic image URL for each post
  },
  {
    id: 3,
    name: 'Washing Machine',
  
    profileImage: 'https://m.media-amazon.com/images/I/71hNjwzeXUL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'How can you imorove yourself reqularly?',
    content: `LG 8 Kg 5 Star Smart Inverter Technology TurboDrum Fully Automatic Top Loading Washing Machine

.`,
    upvotes:4512 ,
    downvotes:21 ,
    comments: 4541,
    shares: 1213,
    Qualifications:   `LG 8 Kg 5 Star Smart Inverter Technology TurboDrum Fully Automatic Top Loading Washing Machine (T80SKSF1Z, Smart Diagnosis, Digital Display, Middle Free Silver) `,
    timeAgo: 'Jan 30',
    image: 'https://m.media-amazon.com/images/I/71hNjwzeXUL._AC_UL480_FMwebp_QL65_.jpg' // Dynamic image URL for each post
  },
  
  ]);

  const handleUpvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // If the post is already downvoted, reverse downvote and upvote it
        if (post.dvoted) {
          post.dvoted = false;
          post.downvotes -= 1;
        }
        // Toggle upvote
        post.upvotes = post.upvoted ? post.upvotes - 1 : post.upvotes + 1;
        post.upvoted = !post.upvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  
  const handleDownvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // If the post is already upvoted, reverse upvote and downvote it
        if (post.upvoted) {
          post.upvoted = false;
          post.upvotes -= 1;
        }
        // Toggle downvote
        post.downvotes = post.dvoted ? post.downvotes - 1 : post.downvotes + 1;
        post.dvoted = !post.dvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  

  const toggleContent = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        post.expanded = !post.expanded;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="bg-gray-100 m-3 h-fit border-spacing-1 rounded-lg relative text-gray-600 text-sm z-0">
      {posts.map(post => (
        <div key={post.id} className="card bg-white p-4 mb-3 border rounded-lg shadow-lg relative">
          {/* Header */}
          <div className="flex w-fit">
            <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" src={post.profileImage} name={post.name} />
            <h1 className="ml-3 mt-0.5 font-semibold">{post.name}</h1>
            <button className="font-semibold ml-2 cursor-pointer relative left-2 text-blue-500 h-6 w-6 hover:underline rounded-full flex items-center justify-center">·Follow</button>

            {/* Close Button */}
            <button className="absolute top-2 right-2 h-6 w-6 hover:bg-gray-200 rounded-full flex items-center justify-center">
              <img src={close} alt="Close" className="h-5 w-5" />
            </button>
          </div>
          <div className="relative -top-2 left-11 text-xs font-semibold text-gray-500">
            <span>{post.Qualifications}</span> · <span>{post.timeAgo}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold mt-3">{post.title}</h1>

          {/* Content */}
          <div className="mt-2">
  {post.content.length > 150 ? (
    <>
      {post.expanded ? post.content : `${post.content.slice(0, 150)}...`}
      <button
        onClick={() => toggleContent(post.id)}
        className="ml-2 text-blue-500 hover:underline"
      >
        {post.expanded ? "Show Less" : "Show More"}
      </button>
    </>
  ) : (
    post.content
  )}
</div>


          {/* Image */}
          <img src={post.image} alt={post.title} className="mt-3 w-full h-auto rounded-md" />

          {/* Interaction Section */}
          <div className="flex items-center text-gray-600 text-sm mt-2 relative">
            {/* Upvote Button */}
            <div className="flex items-center space-x-1 border rounded-full rounded-r-none px-3 py-1 mr-0 hover:bg-gray-100 cursor-pointer">
              <button onClick={() => handleUpvote(post.id)} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-lg ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z" />
                </svg>
                <span className={`ml-1 font-semibold ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}>
                  Upvote·{post.upvotes.toLocaleString()}
                </span>
              </button>
            </div>

            {/* Downvote Button */}
            <div
              onClick={() => handleDownvote(post.id)}
              className="flex items-center border rounded-full rounded-l-none pr-1 py-1 ml-0 hover:bg-gray-100 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 ${post.dvoted ? "text-red-500" : "text-gray-500"}`}
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z"
                  transform="rotate(180 8 8)"
                />
              </svg>
              <span className={`ml-1 font-semibold ${post.dvoted ? "text-red-500" : "text-gray-500"}`}>
                ·{post.downvotes.toLocaleString()}
              </span>
            </div>

            {/* Comment Button */}
            <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <img src={comment} className="h-5 w-5 ml-1 text-gray-600" />
              <span className="font-semibold">{post.comments}</span>
            </div>

            {/* Share Button */}
            <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <img src={share} className="h-5 w-7 text-lg" />
              <span className="font-semibold">{post.shares}</span>
            </div>

            {/* More Options */}
            <div className="flex absolute right-0 items-center hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <span className="text-2xl text-gray-600">⋯</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
