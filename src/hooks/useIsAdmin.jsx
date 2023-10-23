import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";

const useIsAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/users/role/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
                setIsAdminLoading(false);
            });
    }, [user?.email]);

    return [isAdmin, isAdminLoading];
};

export default useIsAdmin;