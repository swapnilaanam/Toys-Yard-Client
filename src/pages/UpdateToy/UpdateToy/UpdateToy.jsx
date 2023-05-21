import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy = useLoaderData();

    const navigate = useNavigate();

    const { _id, price, quantity, description } = toy;

    return (
        <div className="bg-[cornsilk] bg-opacity-50 py-20">
            <div className="max-w-2xl mx-auto p-10 pt-8 bg-base-100 border-2 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">Update Toy</h2>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" defaultValue={price} required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Available Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Quantity" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" defaultValue={quantity} required />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Detail Description</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder="Description"
                            className="textarea border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200"
                            defaultValue={description}
                            rows={3}
                            required
                        >
                        </textarea>
                    </div>
                    <input
                        type="submit"
                        value="Update Toy"
                        className="w-full mt-8 bg-blue-500 text-white font-bold py-4 px-4 rounded-md
                         hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;