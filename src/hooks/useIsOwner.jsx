import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";

const useIsOwner = () => {
    const [isOwner, setIsOwner] = useState(false);
    const [isOwnerLoading, setIsOwnerLoading] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/users/role/owner/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsOwner(data);
                setIsOwnerLoading(false);
            });
    }, [user?.email]);

    return [isOwner, isOwnerLoading];
};

export default useIsOwner;