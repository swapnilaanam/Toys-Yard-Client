import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyRow from '../AllToyRow/AllToyRow';
import './AllToys.css';

const AllToys = () => {
    const loadedAllToys = useLoaderData();

    const [allToys, setAllToys] = useState(loadedAllToys);

    return (
        <div className="py-20">
            <h2 className="text-3xl font-semibold text-center">All Toys</h2>
            <div className="overflow-x-auto max-w-7xl mx-4 lg:mx-auto mt-16">
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
                            allToys.map(toy => <AllToyRow
                                key={toy._id}
                                toy={toy}
                            >
                            </AllToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;