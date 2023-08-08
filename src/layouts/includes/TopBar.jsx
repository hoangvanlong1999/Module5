import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TopBar(props) {
  const [acc, setAcc] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const LogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('jwtToken');
    navigate('/');
    setAcc(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchKeyword);
  };

  const handleSearch = async (keyword) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/product_list/search?keyword=${keyword}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="top-bar" className="container">
      <div className="row">
        <div className="span4">
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
            />
            <button type="submit">Tìm kiếm</button>
          </form>
        </div>
        <div className="span8">
          <div className="account pull-right">
            <ul className="user-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Your Cart</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                {acc !== null ? (
                  <div>
                    <b style={{ marginRight: '5px' }}>{acc.name}</b>
                    <Link onClick={LogOut}>Logout</Link>
                  </div>
                ) : (
                  <Link to="/checkin">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Kết quả tìm kiếm:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TopBar;