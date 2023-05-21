import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRow = ({ toy, handleDeleteToy }) => {
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
            <th className="space-x-4">
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-success capitalize">View Details</button>
                </Link>
                <Link to={`/toy/update/${_id}`}>
                    <button className="btn btn-warning capitalize">Edit</button>
                </Link>
                <button onClick={() => handleDeleteToy(_id)} className="btn bg-red-500 border-red-500
                 hover:bg-red-500 hover:text-white hover:border-red-500 capitalize"
                >
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default MyToyRow;