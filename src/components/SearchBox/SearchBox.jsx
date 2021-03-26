const SearchBox = ({onSearchChange}) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Search Robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search robots...'
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBox;
