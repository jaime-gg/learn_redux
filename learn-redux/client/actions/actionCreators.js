// INCREMENT LIKES
function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}


// ADD COMMENT 
function addComment(postId, author, comment) {
    return{
        type: 'ADD_COMMENT',
        postId,
        comment, 
        author
    }
}

// REMOVE COMMENT 
