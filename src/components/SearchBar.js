import React from 'react'

class SearchBar extends React.Component {

  state = { term: '' }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Type the subject of the images you are looking for (e.g. cars, nature etc.):</label>

          <div className="field">
            <input type="search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
          <span>{this.state.term}</span>
        </form>
      </div>)
  }
}

export default SearchBar