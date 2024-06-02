import React, { useState, useContext } from 'react';
import { ShopContext } from "../../Context/ShopContext";
import './Sidebar_search.css'
import { Link } from 'react-router-dom';

const Sidebar_search = () => {
 const [searchValue, setSearchValue] = useState("");
 const { allProducts, closeSidebar } = useContext(ShopContext);
 const onChange = (e) => {
   setSearchValue(e.target.value);
 };

//  const searchItem = (searchTerm) => {
//    setSearchValue(searchTerm);
//  };
  return (
    <div className="sidebar_search">
      <div className="sidebar_input">
        <input
        type="search"
        value={searchValue}
        placeholder="Search product"
        onChange={onChange}
      />
      </div>
      {/* <button onClick={() => searchItem(searchValue)}>Search</button> */}
      {searchValue && <div className="dropdown">
        {allProducts
          .filter((item) => {
            const searchTerm = searchValue.toLocaleLowerCase();
            const name = item.name.toLocaleLowerCase();
            return (
              searchTerm && name.startsWith(searchTerm) && name !== searchTerm
            );
          })
          .slice(0, 5)
          .map((item) => {
            return (
              <Link
                to={`/product/${item.id}`}
                onClick={closeSidebar}
                key={item.id}
              >
                <div
                  // onClick={() => searchItem(item.name)}
                  className="dropdown-row"
                >
                  {item.name}
                </div>
              </Link>
            );
          })}
      </div>}
    </div>
  );
}

export default Sidebar_search