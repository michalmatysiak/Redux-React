import React from "react";

const Comment = ({text,votes,id,thumbUpComments,thumbDownComments,removeComment,editComment,addComment}) => 
	<li>
		{text} <span>votes: {votes}</span>
		<button onClick={() => thumbUpComments(id)}>Thumb up</button>
		<button onClick={() => thumbDownComments(id)}>Thumb Down</button>
		<button onClick={() => removeComment(id)}>Delete</button>
		<button onClick={() => addComment(text)}>Add comment</button>
		<button onClick={() => editComment(id, prompt("Change comment", text))}>
			Edit
		</button>
	</li>;

export default Comment;
