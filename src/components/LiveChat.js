import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {

    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();

    const messages = useSelector(store => store.liveChat.messages);

    useEffect(() => {
        let id = 1;
        const i = setInterval(() => {
            console.log("Polling");
            dispatch(addMessage({
                name: 'Hari',
                message: 'new year' + id
            }));
            id = id + 1;
        }, 2000);
        return () => clearInterval(i);
    }, []);


    return (
        <div>
            <div className='ml-2 p-2 h-[500px] bg-stone-300 w-full border border-b-slate-300 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {
                    messages.map((item, index) => <ChatMessage key={index} name={item.name} message={item.message} />)
                }
            </div>
            <form className="w-full" onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Harikrishnan",
                    message: message
                }));
                setMessage("");
            }}>
                <input className="w-[200px] border border-black" type="text"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }} />
                <button className="bg-slate-300">Send</button>
            </form>
        </div>

    )
}

export default LiveChat;