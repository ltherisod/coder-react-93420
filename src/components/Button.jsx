const Button = (props) => {

    return (
        <button onClick={props.callback}>
            {props.children}
        </button>
    )

}

export default Button