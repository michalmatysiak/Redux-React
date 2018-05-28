import { connect } from "react-redux";
import Comment from "./Comment";
import {
	thumbUpComments,
	thumbDownComments,
	removeComment,
	editComment
} from "./action";

const mapDispatchToProps = dispatch => ({
	thumbUpComments: id => dispatch(thumbUpComments(id)),
	thumbDownComments: id => dispatch(thumbDownComments(id)),
	removeComment: id => dispatch(removeComment(id)),
	editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);
