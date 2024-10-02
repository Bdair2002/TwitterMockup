import React from "react";
import ContentHeader from "./ContentHeader/ContentHeader";

const Content = () => {
  const title = "React";
  const posts = "2,611";
  return (
    <div className="content">
      <ContentHeader title={title} posts={posts} />
    </div>
  );
};

export default Content;
