import { connect } from "react-redux";
import Comment from "./Comment";
import {
	thumbUpComments,
	thumbDownComments,
	removeComment,
	editComment,
	addComment
} from "./action";

const mapDispatchToProps = dispatch => ({
	thumbUpComments: id => dispatch(thumbUpComments(id)),
	thumbDownComments: id => dispatch(thumbDownComments(id)),
	removeComment: id => dispatch(removeComment(id)),
	editComment: (text,id) => dispatch(editComment(text,id)),
	addComment: (text,id) => dispatch(addComment(text,id))
});

export default connect(null, mapDispatchToProps)(Comment);
