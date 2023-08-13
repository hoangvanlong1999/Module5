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
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.search-form {\n  display: flex;\n  justify-content: center;\n}\n\n.search-form .input-group {\n  max-width: 300px;\n}\n\n.search-form .form-control {\n  border-radius: 0;\n}\n\n.search-form .btn {\n  border-radius: 0;\n}\n.search-form .btn {\n  font-size: 10px;\n  padding: 3px 8px;\n}\n\n"
        }}
      />




      <div id="top-bar" className="container">
        <div className="row">
          <div class="span4">
            <form method="POST" class="search_form">
              <input type="text" class="input-block-level search-query" Placeholder="search..."/>
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
      </div>
    </>

  );
}

export default TopBar;