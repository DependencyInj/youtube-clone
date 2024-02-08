import Comment from "./Comment"

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className="mx-5 border border-l-black">
                <Comment key={index} data={comment} />
                <Comment key={index} data={comment} />
                <Comment key={index} data={comment} />
                <Comment key={index} data={comment} />
            </div>
        </div>
    ));
}

export default CommentList;