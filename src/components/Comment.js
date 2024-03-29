const Comment = ({ data }) => {
   const { name, comment, replies } = data;
    return (
        <div className="py-3 px-5 bg-slate-100 rounded-xl my-2">
            <div className="flex">
                <img className="w-8 h-8 mt-2" alt="user" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" />
                <div className="px-3">
                    <p className="font-bold">{name}</p>
                    <p>{comment}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Comment;