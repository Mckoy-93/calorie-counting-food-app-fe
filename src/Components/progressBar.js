import React from 'react'

export default function ProgressBar(props) {

    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <span className='ProgressBar'>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </span>
    );
}