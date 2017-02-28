import React from 'react'

const Quote = ({ text, author }) => {
  return (
      <blockquote className="blockquote">
        <p>{text}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
  )
};

Quote.propTypes = {
  text: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
};

export default Quote