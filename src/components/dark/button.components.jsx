import './dark.components.css'

function ButtonComp(props){
    

    return(
        <div className='all-buttons'>
            <button className="buttons" onClick={props.onClick}>{props.text}</button>


        </div>
    )
}


export default ButtonComp