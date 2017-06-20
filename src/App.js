import React, { Component } from 'react'
import './App.css'
import Words from './words.json'

class NameCardContainer extends React.Component {
  state = { words: [] }

  componentDidMount() {
    fetchWords(words =>
      this.setState({ words: words }))
  }
  render() {
      return <NameCard words={this.state.words} />
  }
}

class NameCard extends React.Component {
  render() {
    return (
      <ul>
        {this.props.words.map(list =>
          <li>{list.word}</li>)}
      </ul>
      )
  }
}

// const NameCard = props =>
//   (
//     <ul>
//       {props.words.map(list => (
//         <li>{list.word}</li>
//         ))}
//     </ul>
//     )

const fetchWords = cb =>
  cb(Words)

class App extends Component {
  render() {
    return (
      <NameCardContainer />
    )
  }
}

export default App
