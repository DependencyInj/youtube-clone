const Button = ({name}) => {
    return  (
        <div>
            <button className="bg-gray-200 py-1 px-5 m-1 rounded-md cursor-pointer">{name}</button>
        </div>
    );
}

export default Button;