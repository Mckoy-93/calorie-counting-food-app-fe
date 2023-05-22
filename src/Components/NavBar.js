import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='NavBar'>
            <nav>
                <Link className='The Food App!' to='/'> The Food App! </Link>
                <button className='foodButton'><Link to='/foods'>Foods</Link></button>
                <button className='newButton'><Link to='/foods/new'>Add Foods</Link> </button>
            </nav>
        </div>
    )
}