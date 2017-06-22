import React, { Component } from 'react'

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

    resetBoardState() {
        const NUM_OF_CARDS = 25;
        const BLUE = 'blue';
        const RED = 'red';
        const NEUTRAL = 'neutral';
        const BOMB = 'bomb';

        const boardState = [];

        for (let i = 0; i < NUM_OF_CARDS; i++) {
            let insertionIndex = Math.floor(Math.random() * NUM_OF_CARDS);
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
        return (
            <div>hi</div>
        )
    }
}

export default App
