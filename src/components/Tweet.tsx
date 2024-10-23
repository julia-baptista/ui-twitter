import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from  'react-router-dom';
import './Tweet.css';

interface TweetProps {
  content: string
}

/* const tweetStyles = {
  borderRadius: 8
} */

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/julia-baptista.png" alt="Julia Baptista" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Julia Baptisa</strong>
          <span>@juliab</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}

