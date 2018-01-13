import SecretWord from './SecretWord'

class WordsList extends PureComponent {
  renderWord(word, index) {
    return <SecretWord key={index} { ...word } />
  }
}

const Words = [
  {
    word: 'accomodate'
  },
  {
    word: 'handkerchief'
  },
  {
    word: 'rhythm'
  },
  {
    word: 'embarass'
  },
  {
    word: 'pronunciation'
  },
  {
    word: 'alpaca'
  }


]

export default WordsList
