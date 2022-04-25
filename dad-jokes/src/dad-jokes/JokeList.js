import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import { v4 as uuid } from "uuid";

class JokeList extends Component {
  static defaultProps = { numJokesToGet: 10 };

  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      if (jokes.includes(res.data.joke)) {
        continue;
      }
      jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }

    this.setState({ jokes: jokes });
  }

  handleVote(id, change) {
    this.setState((st) => ({
      jokes: st.jokes.map((j) => {
        return j.id === id ? { ...j, votes: j.votes + change } : j;
      }),
    }));
  }

  render() {
    return (
      <div className="jokelist">
        <div className="jokelist-sidebar">
          <h1 className="jokelist-title">
            <span>Dad</span> jokes
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="btn-get-more">New jokes</button>
        </div>

        <div className="jokelist-jokes">
          {this.state.jokes.map((j) => (
            <div>
              <Joke
                key={j.id}
                text={j.text}
                votes={j.votes}
                upvote={() => this.handleVote(j.id, 1)}
                downvote={() => this.handleVote(j.id, -1)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
