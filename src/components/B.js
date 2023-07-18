import React, { useCallback } from "react";

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const List = React.memo(({ posts, testFunction }) => {
  console.log("List is rendered");
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const B = ({ message, posts }) => {
  console.log("B is rendered");
  const testFunction = useCallback(() => {
    console.log("testFunction is called");
  }, []);
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} testFunction={testFunction} />
    </div>
  );
};

export default B;
