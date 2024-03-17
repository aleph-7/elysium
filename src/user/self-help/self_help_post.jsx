import './self_help_post.css';
import React from "react";


const SelfHelpPost = ({image_url,headline,content,author}) =>
{
    const postStyle = {
        backgroundImage: `url(${image_url})`,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
      };

    return(
        <div class="MainPostDiv">
            <div class="PostHeadlineAuthorDiv" style={postStyle}>
                <h1 class="PostHeadline">{headline}</h1>
                <h2 class="PostAuthor">-{author}</h2>
            </div>
            <div class="PostContentDiv">
                <div class="postContent">
                <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default SelfHelpPost;