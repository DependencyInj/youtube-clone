const ChatMessage = ({name, message}) => {
    return (
        <div className="flex align-middle">
            <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
            <span className="font-bold ml-2">{name}</span>
            <span className="font-light ml-2">{message}</span>
        </div>
    )
}

export default ChatMessage;