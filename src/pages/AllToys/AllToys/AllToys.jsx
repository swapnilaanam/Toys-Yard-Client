import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyRow from '../AllToyRow/AllToyRow';
import './AllToys.css';
import useTitle from '../../../hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys');

    const loadedAllToys = useLoaderData();

    const [allToys, setAllToys] = useState(loadedAllToys);

    const handleSearch = event => {
        event.preventDefault();

        const form = event.target;

        const searchFieldValue = form.toyname.value;

        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/toys/search/toyname?name=${searchFieldValue}`)
            .then(res => res.json())
            .then(data => setAllToys(data));
    }

    return (
        <div className="py-20">
            <h2 className="text-3xl font-semibold text-center">All Toys</h2>
            <div class="max-w-7xl mx-4 lg:mx-auto flex justify-end items-center mt-7">
                <form onSubmit={handleSearch}>
                    <input class="px-4 py-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text" name="toyname" placeholder="Search By Toy Name" />
                    <button class="px-4 py-[10px] bg-green-600 text-white rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" type="submit">Search</button>
                </form>
            </div>

            <div className="overflow-x-auto max-w-7xl mx-4 lg:mx-auto mt-14">
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