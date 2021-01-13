import React from 'react';
import rot13 from 'rot-thirteen';

class Translator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialText || '',
            translation: rot13(props.initialText) || ''
        }
    }

    render() {
        return (
            <div>
                <h1>Translator</h1>
                <input type="text" onChange={this._updateText}/>
                <p>{this.state.text}</p>
                <p>{this.state.translation}</p>
            </div>
        );
    }

    _updateText = (event) => {
        const text = event.target.value
        this.setState({
            text,
            translation: rot13(text)
        }, () => {
            console.log(`Text changed: ${text}`)
        })
    }
}

export default Translator;