import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';

const AddAToy = () => {
    const [subCategories, setSubCategories] = useState([]);

    useTitle('Add A Toy');

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://toy-marketplace-server-gray-beta.vercel.app/subcategories')
            .then(res => res.json())
            .then(data => setSubCategories(data));
    }, []);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.toyName.value;
        const toyPhoto = form.toyPhoto.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = { toyName, toyPhoto, sellerName, sellerEmail, subCategory, price, rating, quantity, description }

        // console.log(newToy);

        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/toys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    });

                    form.reset();

                    form.sellerName.value = user?.displayName;
                    form.sellerEmail.value = user?.email;
                }
            });
    }

    return (
        <div className="bg-[cornsilk] bg-opacity-50 py-20">
            <div className="max-w-4xl mx-auto p-10 pt-8 bg-base-100 border-2 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">Add Toy</h2>
                <form onSubmit={handleAddToy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Toy Name</span>
                            </label>
                            <input type="text" name="toyName" placeholder="Toy Name" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Photo URL</span>
                            </label>
                            <input type="text" name="toyPhoto" placeholder="Photo URL Of The Toy" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Seller Name</span>
                            </label>
                            <input type="text" name="sellerName" placeholder="Seller Name" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" defaultValue={user?.displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Seller Email</span>
                            </label>
                            <input type="email" name="sellerEmail" placeholder="Seller Email" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" defaultValue={user?.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Sub Category</span>
                            </label>
                            <select className="select select-bordered" name="subCategory" defaultValue="Naruto" required>
                                {
                                    subCategories.map(subCategory => <option
                                        key={subCategory._id}
                                        value={subCategory.name}
                                    >
                                        {subCategory?.subCategoryName}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating (From 0-5)" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Available Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Quantity" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Detail Description</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder="Description"
                            className="textarea border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        >
                        </textarea>
                    </div>
                    <input
                        type="submit"
                        value="Add Toy"
                        className="w-full mt-8 bg-blue-500 text-white font-bold py-4 px-4 rounded-md
                         hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddAToy;