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
                <div className="w-full px-2 py-2 h-3">
                    <input className="w-[460px] h-[30px] mr-1 border border-none px-3 bg-slate-200 rounded-lg border-black" type="text"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }} />
                    <button className="bg-slate-300 h-[30px] w-[100px]">Send</button>
                </div>
            </form>
        </div>

    )
}

export default LiveChat;