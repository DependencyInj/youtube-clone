import Comment from "./Comment"

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment} />
            <div className="mx-5 border border-l-black">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ));
}

export default CommentList;