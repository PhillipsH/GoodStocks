import React, { useState, useEffect } from 'react';
import Post from './post';

const AllPosts = (props) => {
  const [posts, setPosts] = useState({
    data: []
  });
  const fetchAllPosts = () => {
    fetch('/api/getAllPosts')
    .then(response => response.json())
    .then(json => {
      json.forEach(post => post.post_date = post.post_date.split("T")[0])
      // json.forEach(post => post.commentsCount = JSON.parse(post.commentsCount))
      console.log(json)
      setPosts({data:json})
    })
  };
  const fetchTickerPosts = (currentTicker) => {
    console.log(currentTicker)
    fetch('/api/ticker/' + currentTicker)
    .then(response => response.json())
    .then(json => {
      json.forEach(post => post.post_date = post.post_date.split("T")[0])
      console.log(json)
      setPosts({data:json})
    })
  };
  
  useEffect(() => {
    if(props.ticker == undefined){
      fetchAllPosts()
    }else{
      fetchTickerPosts(props.ticker)
    }
  }, []);

  return(
    <>
      {posts.data.map((val, key) => 
        <Post 
          key={key} 
          id={val.post_id}
          title={val.post_title} 
          poster={val.username} 
          postBody={val.post_text} 
          date={val.post_date} 
          commentCount={val.comment_count}
          ticker={val.ticker}
          />
        )}
    </>
  );
}

export default AllPosts;

