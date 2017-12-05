import React, { PropTypes } from 'react'

const propTypes = {
    onClick: PropTypes.func.isRequired
}

function ResetGameButton(props) {
    /**
     * @param {Function} callback
     */
    function onClick(callback) {
        window.confirm('Are you sure you want to reset the game?') && callback()
    }

    return (
        <button onClick={() => onClick(props.onClick)}>
            Reset Game
        </button>
    )
}

ResetGameButton.propTypes = propTypes

export default ResetGameButton
