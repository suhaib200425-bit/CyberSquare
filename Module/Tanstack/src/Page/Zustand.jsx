import React from 'react'
import useStore from '../Zustand/zustand'
import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Zustand() {
    const { user, setUser } = useStore((state) => state)

    // const queryClient = useQueries(); // ✅ THIS LINE IS REQUIRED

    const fetchUser = async () => {
        const response = await axios.get("http://localhost:1337/api/users/20");
        console.log(response.data);
        setUser(response.data)
        return 1
    }

    const { data: User, isLoading: UserLoding, error: UserError } = useQuery({
        queryKey: ["User"],
        queryFn: fetchUser,
    });
    if (UserLoding) {
        return <h1>Loding..</h1>
    }
    if (UserError) {
        return <h1>Errror !</h1>
    }
    return (
        <div>
            <h1>UserName: {user?.username}</h1>
            {/* <button onClick={increment}>Increment</button> */}
            {/* <button onClick={decrement}>Decrement</button> */}
            {/* <button onClick={reset}>Reset</button> */}
        </div>
    )
}

export default Zustand