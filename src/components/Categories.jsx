/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Categories = ({ categories = [] }) => {
    // Ensure categories is an array
    if (!Array.isArray(categories)) {
        console.error("Expected categories to be an array, got:", categories);
        return null; // or return a fallback UI
    }

    return (
        <div role="tablist" className="tabs tabs-boxed flex flex-col  items-start w-40">
            {
                categories.map(category => (
                    <NavLink key={category.category} to={`/category/${category.category}`} role='tab' className={({ isActive }) => `tab ${isActive? 'tab-active' : '' }`}
                    >
                        {category.category}
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Categories;
