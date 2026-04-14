const Input = (props) => {
    return(
        <>
            <text className="text-[#eee8e8] my-[8px]">{props.label}</text>
            <input type={props.type} placeholder ={props.title} className="w-[350px] h-[43px] caret-white rounded-[10px] text-[#c9c2c2]" style={{border: "1px solid #c9c2c2", padding: "0px 18px", outline: 0}}/>
        </>
    )
}
export default Input