import React, { PropTypes } from 'react'

const propTypes = {
    onClick: PropTypes.func.isRequired
}

function ResetGameButton({ onClick }) {
    return (
        <button onClick={onClick}>
            Reset Game
        </button>
    )
}

ResetGameButton.propTypes = propTypes

export default ResetGameButton
