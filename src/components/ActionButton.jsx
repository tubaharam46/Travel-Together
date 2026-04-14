import { useNavigate } from "react-router-dom"

const ActionButton = (props) => {

    const navigate = useNavigate();
    return (
        <>
            <br/>
            <button onClick={() => navigate(props.link)} style={{backgroundColor: props.bgcolor, color: props.color, width: "100%", height: "44px", borderRadius: "10px", outline: 0, cursor: "pointer"}}>{props.title}</button>
        </>
    )
}

export default ActionButton


