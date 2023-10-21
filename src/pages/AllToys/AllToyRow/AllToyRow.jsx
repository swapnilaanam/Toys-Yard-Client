import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const AllToyRow = ({ toy }) => {
    const { _id, sellerName, sellerEmail, toyPhoto, toyName, subCategory, price, quantity } = toy;

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleBuyNow = () => {
        const toyInfo = {
            toyId: _id,
            toyName,
            toyPhoto,
            sellerName,
            sellerEmail,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            price
        };

        localStorage.setItem("toyInfo", JSON.stringify(toyInfo));

        navigate(`/checkout/${_id}`);
    }

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
                    <button className="btn btn-warning btn-sm capitalize">View Details</button>
                </Link>
                <button onClick={handleBuyNow} className="btn btn-sm btn-nuetral font-medium text-sm capitalize">Buy Now</button>
            </th>
        </tr>
    );
};

export default AllToyRow;