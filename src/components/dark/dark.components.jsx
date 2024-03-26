import './dark.components.css'
import Image from './image.component'
import a from './image/a.jpg'
import ButtonComp from './button.components'
// import { useState } from 'react'


function Main(props){
    

    function greet(){
        const hours = new Date().getHours()
        const years = new Date().getFullYear()
        console.log(hours)
        if (hours >= 12 && hours <= 15){
            alert(`Good Afternoon. Welcome to 30 days of react ${years}`)
        }
        else if(hours >= 16 && hours < 24){
            alert(`Good Evening. Welcome to 30 days of react ${years}`)
        }
        else if( hours <= 11){
            alert(`Good Morning. Welcome to 30 days of react ${years}`)
            
        }
        else{
            alert("Invalid Time")
        }

    }

    function showTime(){
        const date = new Date().toLocaleTimeString()
        alert(date)

    }

    function changeBackground(){
        props.toggleDarkMode()
    }



    return(
        <div className={`main ${props.isDark ? 'dark' : ''}`} >
            <div className='main-info'>
                <h4>Prerequisite to get started react.js:</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                </ul>
                <Image img={a}/>
                <p id='text'>Sango Tel</p>
                <ButtonComp text='Greet People' onClick={greet} />
                <ButtonComp text='Show Time' onClick={showTime} />
                <ButtonComp text='Change Background' onClick={changeBackground} />

            </div>

        </div>
    )
}


export default Main