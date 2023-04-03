//Helloはクリックするとアラートを返す
const Hello = () =>{
    const onClick = () => {
        //アラート
        alert('hello')
    }

    const text = 'Hello, React'

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )

}

export default Hello