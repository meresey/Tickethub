import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ tickets, setSearchResults }) => {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>

                </ul>
            </nav>
            <div className='search'>
                <form onSubmit={e => {
                    e.preventDefault();
                    handleSubmit(searchTerm, tickets, setSearchResults, navigate)
                } }>
                    <input
                        type='text'
                        placeholder='Search here'
                        value={searchTerm}
                        onChange={(e) => {setSearchTerm(e.target.value)
                        console.log(searchTerm)}}
                        id='search-input'
                        className='input'
                    />
                    <button type='submit' className='search-button'>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

function handleSubmit(searchText, tickets, setSearchResults, navigate) {
    let result = [];
    result = tickets.filter(ticket => ticket.id == searchText);
    if (result.length > 0) {
        setSearchResults(result);
        navigate("/search")
    } 
}

export default NavBar;