import React, { Component } from 'react'

import Board from '../ui/board';

const BLUE = 'blue';
const RED = 'red';
const NEUTRAL = 'neutral';
const BOMB = 'bomb';

/**
 * @param  {Object[]} boardState
 * @return {Boolean}
 */
function checkIfRedWins(boardState) {
    const NUM_OF_CARDS_RED = 9

    return boardState
        .filter(({ belongsTo, isClicked }) => belongsTo === RED && isClicked)
        .length === NUM_OF_CARDS_RED
}

/**
 * @param  {Object[]} boardState
 * @return {Boolean}
 */
function checkIfBlueWins(boardState) {
    const NUM_OF_CARDS_BLUE = 8

    return boardState
        .filter(({ belongsTo, isClicked }) => belongsTo === BLUE && isClicked)
        .length === NUM_OF_CARDS_BLUE
}

/**
 * Red team goes first.
 */
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isRedsTurn: true,
            boardState: []
        }
    }

    componentDidMount() {
        this.resetBoardState()
    }

    /**
     * Already clicked cards cannot be clicked.
     *
     * @param {Number} i
     */
    onClickCard(i) {
        const { boardState, isRedsTurn } = this.state
        const card = boardState[i]
        let isRedsTurnNext = isRedsTurn

        card.isClicked = true

        if (card.belongsTo === BOMB) {
            if (isRedsTurn) {
                alert('Blue wins!')
            } else {
                alert('Red wins!')
            }
        } else if (checkIfRedWins(boardState)) {
            alert('Red wins!')
        } else if (checkIfBlueWins(boardState)) {
            alert('Blue wins!')
        } else if (card.belongsTo === NEUTRAL ||
            (card.belongsTo === RED && !isRedsTurn) ||
            (card.belongsTo === BLUE && isRedsTurn)) {
            isRedsTurnNext = !isRedsTurnNext
        }

        this.setState({
            boardState: boardState,
            isRedsTurn: isRedsTurnNext
        })
    }

    resetBoardState() {
        const NUM_OF_CARDS = 25;
        const boardState = [];

        for (let i = 0; i < NUM_OF_CARDS; i++) {
            let insertionIndex = Math.floor(Math.random() * NUM_OF_CARDS)
            let belongsTo

            switch (true) {
                case i <= 8:
                    belongsTo = RED
                    break
                case i <= 16:
                    belongsTo = BLUE
                    break
                case i <= 17:
                    belongsTo = BOMB
                    break
                default:
                    belongsTo = NEUTRAL
            }

            while (boardState[insertionIndex] !== undefined) {
                if (insertionIndex === 24) {
                    insertionIndex = 0
                } else {
                    insertionIndex++
                }
            }

            boardState[insertionIndex] = {
                belongsTo,
                isClicked: false,
                word: 'Mock Word'
            }
        }

        this.setState({
            boardState
        })
    }

    render() {
        const cards = this.state.boardState.map(function(card) {
            return <div>{card.belongsTo}</div>
        })

        return (
            <Board>
                {cards}
            </Board>
        )
    }
}

export default App
