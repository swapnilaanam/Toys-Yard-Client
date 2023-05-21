import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import MyToyRow from '../MyToyRow/MyToyRow';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/toys/mytoys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }, []);

    return (
        <div className="py-20">
            <h2 className="text-3xl font-semibold text-center">My Toys</h2>
            <div className="max-w-7xl mx-4 lg:mx-auto flex justify-end items-center mt-7">

            </div>

            <div className="overflow-x-auto max-w-[1380px] mx-4 lg:mx-auto mt-14">
                <table className="table w-full table-zebra border-2 text-center">
                    <thead>
                        <tr>
                            <th className="text-sm">Toy Name</th>
                            <th className="text-sm">Sub Category</th>
                            <th className="text-sm">Seller Name</th>
                            <th className="text-sm">Price</th>
                            <th className="text-sm">Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <MyToyRow
                                key={toy._id}
                                toy={toy}
                            >
                            </MyToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;