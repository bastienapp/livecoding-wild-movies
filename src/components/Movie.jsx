import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favourite: props.favourite
    }
  }

  render() {
    const { title, year, poster, description, released } = this.props;

    return (
      <section className="Movie">
        <img src={poster} alt={title} />
        <div>
          <h3 className={released ? "released" : ""}>{title} ({year})</h3>
          <p>{description}</p>
          {
            released && <span>Released!</span>
          }
        </div>
        <div>
          <button onClick={(event) => { this.setState({ favourite: !this.state.favourite }) }}>
            {this.state.favourite ? "Remove from favourite" : "Add to favourite"}
          </button>
        </div>
      </section>
    )
  }
}

export default Movie;