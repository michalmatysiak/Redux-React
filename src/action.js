import uuid from "uuid";

export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const THUMB_UP_COMMENTS = "THUMB_UP_COMMENTS";
export const THUMB_DOWN_COMMENTS = "THUMB_DOWN_COMMENTS";

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        votes: 0
    };
}

export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    };
}

export function thumbUpComments(id) {
    return {
        type: THUMB_UP_COMMENTS,
        id
    };
}

export function thumbDownComments(id) {
    return {
        type: THUMB_DOWN_COMMENTS,
        id
    };
}
