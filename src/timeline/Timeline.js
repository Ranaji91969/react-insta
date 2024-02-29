import React, { useState } from "react";
import Post from "./Post/Post";

import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Anmol thakur_",
      postImage:
        "https://images.unsplash.com/photo-1501608678205-3929cf853fd4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Jatin Verma",
      postImage:
        "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "Varender Singh",
      postImage:
        "https://images.unsplash.com/photo-1554160367-0d33ecaf0334?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 140,
      timestamp: "2d",
    },
    
    {
      user: "Ranaji",
      postImage:
        "https://images.unsplash.com/photo-1461770354136-8f58567b617a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "Vikram",
      postImage:
        "https://images.unsplash.com/photo-1433878455169-4698e60005b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 114,
      timestamp: "2d",
    },
    {
      user: "Adarsh",
      postImage:
        "https://images.unsplash.com/photo-1478001517127-fccc92f54906?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 96,
      timestamp: "2d",
    },
    {
      user: "Ankit",
      postImage:
        "https://images.unsplash.com/photo-1506630525117-569864448381?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 84,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
     
      </div>
    </div>
  );
}

export default Timeline;
