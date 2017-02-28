import React from 'react'

const NewQuoteButton = ({ getNewQuote }) => {
  return (
      <button onClick={getNewQuote} className="btn btn-primary">
        Get New Quote
      </button>
  )
};

NewQuoteButton.propTypes = {
  getNewQuote: React.PropTypes.func
};

export default NewQuoteButton