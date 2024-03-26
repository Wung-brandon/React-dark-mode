import './dark.components.css'



function Image(props){
    return(
        <div>
            <img src={props.img} alt="images" className='img' />

        </div>
    )
}


export default Image