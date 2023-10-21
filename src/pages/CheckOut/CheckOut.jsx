import { Link} from "react-router-dom";
import { useState, useEffect } from "react";

const CheckOut = () => {
    const [toyInfo, setToyInfo] = useState();
    useEffect(() => {
        setToyInfo(JSON.parse(localStorage.getItem("toyInfo")));
    }, [])

    return (
        <div className="py-24 bg-green-100 px-4 lg:px-0">
            <div className="max-w-2xl mx-auto ">
                <div className="flex flex-col bg-white border-2 shadow-xl rounded-md px-5 py-12 text-sm gap-5">
                    <div className="flex justify-between gap-2">
                        <div>Toy Name:</div>
                        <div><strong>{toyInfo?.toyName}</strong></div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div>Seller Name:</div>
                        <div><strong>{toyInfo?.sellerName}</strong></div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div>Seller Email:</div>
                        <div><strong>{toyInfo?.sellerEmail}</strong></div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div>Buyer Name:</div>
                        <div><strong>{toyInfo?.buyerName}</strong></div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div>Buyer Email:</div>
                        <div><strong>{toyInfo?.buyerEmail}</strong></div>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto bg-white mt-8 px-7 py-12 border-2 shadow-xl rounded-md">
                <div className="flex justify-between">
                    <div className="text-lg font-semibold space-y-4">
                        <div>Price:</div>
                        <div>Tax(0.5%):</div>
                    </div>
                    <div className="text-base font-medium space-y-5 text-right">
                        <div>{toyInfo?.price}</div>
                        <div>{`${((toyInfo?.price * 0.5) / 100).toFixed(2)}`}</div>
                    </div>
                </div>
                <div className="divider before:bg-gray-400 after:bg-gray-400"></div>
                <div className="flex justify-between">
                    <div className="text-xl font-semibold">SubTotal:</div>
                    <div className="text-lg font-medium text-right">
                        {`${(+toyInfo?.price + (+(toyInfo?.price * 0.5) / 100)).toFixed(2)}`}
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="text-right mt-12 me-5">
                    <Link to={`/payment/${toyInfo?._id}`}>
                        <button className="btn btn-warning px-10">CheckOut</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;