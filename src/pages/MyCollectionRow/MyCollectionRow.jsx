import React from 'react';
import { Link } from 'react-router-dom';

const MyCollectionsRow = ({ toy }) => {
    const { sellerName, toyPhoto, toyName, price, quantity } = toy;

    return (
        <tr>
            <th className="flex justify-center items-center">
                <img src={toyPhoto} alt='Toy' className='w-16 h-16'></img>
            </th>
            <td>
                {toyName}
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
        </tr>
    );
};

export default MyCollectionsRow;