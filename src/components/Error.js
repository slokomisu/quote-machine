import React from 'react'

const Error = ({ message }) => {
  return (
      <h1>{message}</h1>
  )
};

Error.propTypes = {
  message: React.PropTypes.string.isRequired
};

export default Error