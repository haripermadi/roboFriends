import React from 'react'

const SearchBox = ({ search, searchChange }) => {
  console.log('scrollbox')
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robo"
        onChange={searchChange}
        aria-label="search robo"

      />
    </div>
  )
}

export default SearchBox