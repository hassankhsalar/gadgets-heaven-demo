/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Categories = ({ categories = [] }) => {
    // Ensure categories is an array
    if (!Array.isArray(categories)) {
        console.error("Expected categories to be an array, got:", categories);
        return null; // or return a fallback UI
    }

    return (
        <div role="tablist" className="tabs tabs-boxed flex flex-col border-2 items-start w-40">
            {
                categories.map(category => (
                    <Link key={category.category} to='' role='tab' className='tab'>
                        {category.category}
                    </Link>
                ))
            }
        </div>
    );
};

export default Categories;
