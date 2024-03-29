import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";

const useIsCustomer = () => {
    const [isCustomer, setIsCustomer] = useState(false);
    const [isCustomerLoading, setIsCustomerLoading] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/users/role/customer/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsCustomer(data);
                setIsCustomerLoading(false);
            });
    }, [user?.email]);

    return [isCustomer, isCustomerLoading];
};

export default useIsCustomer;