import React, { Component } from 'react'
import randomWords from 'random-words'

import Board from '../ui/board';
import Card from '../ui/card';

const BLUE = 'blue';
const RED = 'red';
const NEUTRAL = 'neutral';
const BOMB = 'bomb';

/**
 * @param  {Object[]} boardState
 * @param  {String}   team
 * @param  {Number}   numOfCardsNeededToWin
 * @return {Boolean}
 */
function checkIfAnyWinner(boardState, team, numOfCardsNeededToWin) {
    return boardState
        .filter(({ belongsTo, isClicked }) => belongsTo === team && isClicked)
        .length === numOfCardsNeededToWin
}

/**
 * @param  {Object[]} boardState
 * @return {Boolean}
 */
function checkIfRedWins(boardState) {
    const NUM_OF_CARDS_RED = 9
    checkIfAnyWinner(boardState, RED, NUM_OF_CARDS_RED)
}

/**
 * @param  {Object[]} boardState
 * @return {Boolean}
 */
function checkIfBlueWins(boardState) {
    const NUM_OF_CARDS_BLUE = 8
    checkIfAnyWinner(boardState, BLUE, NUM_OF_CARDS_BLUE)
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
        return () => {
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
            } else if (card.belongsTo === NEUTRAL ||
                (card.belongsTo === RED && !isRedsTurn) ||
                (card.belongsTo === BLUE && isRedsTurn)) {
                isRedsTurnNext = !isRedsTurnNext
            } else if (checkIfRedWins(boardState)) {
                alert('Red wins!')
            } else if (checkIfBlueWins(boardState)) {
                alert('Blue wins!')
            }

            this.setState({
                boardState: boardState,
                isRedsTurn: isRedsTurnNext
            })
        }
    }

    resetBoardState() {
        const NUM_OF_CARDS = 25;
        const boardState = [];
        const words = randomWords({ exactly: NUM_OF_CARDS })

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
                word: words[i]
            }
        }

        this.setState({
            boardState
        })
    }

    render() {
        const { boardState, isRedsTurn } = this.state

        const cards = boardState.map((card, i) => (
            <Card
                card={card}
                key={i}
                onClick={this.onClickCard(i)}
            />
        ))

        const turnLabel = isRedsTurn ? "It's Red's turn." : "It's Blue's turn."

        return (
            <div>
                {turnLabel}
                <Board>
                    {cards}
                </Board>
            </div>
        )
    }
}

export default App
