import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({ toy }) => {
    const { _id, sellerName, toyName, subCategory, price, quantity } = toy;

    return (
        <tr>
            <th>
                {toyName}
            </th>
            <td>
                {subCategory}
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                <span className="badge badge-sm text-xl w-24 py-4">
                    ${price}
                </span>
            </td>
            <td>
                <span className="badge badge-sm text-xl w-20 py-4">
                    {quantity}
                </span>
            </td>
            <th>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-warning btn-sm capitalize">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToyRow;