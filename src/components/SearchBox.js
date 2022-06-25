const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search" onChange={(ev) => searchChange(ev.target.value)}/>;
        </div>
    )
}

export default SearchBox;