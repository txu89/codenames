import React, { PropTypes } from 'react'

const propTypes = {
    card: PropTypes.object.isRequired
}

function Card(props) {
    const {
        belongsTo,
        isClicked,
        word
    } = props.card

    let className = `card ${belongsTo}`

    if (isClicked) {
        className += ' is-clicked'
    }

    return (
        <div
            className={className}
            onClick={props.onClick}
        >
            {word}
        </div>
    )
}

Card.propTypes = propTypes

export default Card
