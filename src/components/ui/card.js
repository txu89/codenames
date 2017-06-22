import React, { PropTypes } from 'react'

const propTypes = {
    card: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

function Card({ card, onClick }) {
    const {
        belongsTo,
        isClicked,
        word
    } = card

    let className = `card ${belongsTo}`

    if (isClicked) {
        className += ' is-clicked'
    }

    return (
        <div
            className={className}
            onClick={onClick}
        >
            {word}
            {isClicked}
            {belongsTo}
        </div>
    )
}

Card.propTypes = propTypes

export default Card
