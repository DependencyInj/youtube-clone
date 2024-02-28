import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {

    const dispatch = useDispatch();

    const messages = useSelector(store => store.liveChat.messages);

    useEffect(() => {
        let id = 1;
        const i = setInterval(() => {
            console.log("Polling");
            dispatch(addMessage({
                name:'Hari',
                message:'new year' + id
            }));
        id = id + 1;
        }, 2000);
        return () => clearInterval(i);
    }, []);


    return (
        <div className='ml-2 p-2 h-[500px] bg-stone-300 w-full border border-b-slate-300 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {
                messages.map((item, index) => <ChatMessage key={index} name={item.name} message={item.message} />)
            }
        </div>
    )
}

export default LiveChat;