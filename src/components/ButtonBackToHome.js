import React from 'react'
import {Link} from 'react-router-dom'
import App from '../App'

export const ButtonBackToHome = () =>(
    <Link 
    className='button is-info'
    to='/' >
    volver a la portada
    </Link>
)