import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import MyToyRow from '../MyToyRow/MyToyRow';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import useTitle from '../../../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys');

    const [myToys, setMyToys] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/toys/mytoys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }, []);

    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure, You want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-marketplace-server-gray-beta.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Toy Deleted Successfully!',
                                'success'
                            );

                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }

    const sortByPriceAscending = () => {
        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/toys/sort?price=Ascending&email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }

    const sortByPriceDescending = () => {
        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/toys/sort?price=Descending&email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }

    return (
        <div className="py-16 min-h-screen">
            <h2 className="text-3xl font-semibold text-center">My Toys</h2>

            <div className="max-w-[1380px] mx-4 lg:mx-auto flex justify-end gap-3 mt-8">
                <button onClick={sortByPriceAscending} className='btn border-0 bg-sky-500 hover:bg-sky-600 text-white hover:text-white'>
                    Sort By Price In Ascending Order
                </button>
                <button onClick={sortByPriceDescending} className='btn border-0 '>
                    Sort By Price In Descending Order
                </button>
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
                                handleDeleteToy={handleDeleteToy}
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