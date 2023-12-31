import React from 'react';
import { IPost } from '@/components/Post/Post.types';
import { PostContainer } from '@/components/Post//Post.constants';

const Post = ({ ...props }: IPost) => {
  const { title, body, id } = props;

  return (
    <PostContainer>
      <div className="title">
        {id}. {title}
      </div>
      <div className="body">{body}</div>
    </PostContainer>
  );
};

export default Post;
