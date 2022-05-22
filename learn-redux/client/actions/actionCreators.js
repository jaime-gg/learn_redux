// INCREMENT LIKES
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// ADD COMMENT 
export function addComment(postId, author, comment) {
    return{
        type: 'ADD_COMMENT',
        postId,
        comment, 
        author
    }
}

// REMOVE COMMENT 
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT', 
        postId,
        i
    }
}