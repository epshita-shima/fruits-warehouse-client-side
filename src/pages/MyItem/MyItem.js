import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Item from '../Item/Item';

const MyItem = () => {
    const [myItems, setMyItem] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getMyItem = async () => {
            const email = user?.email;
            const url = `https://evening-river-08129.herokuapp.com/myItem?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyItem(data);
        }
        getMyItem();
    }, [user]);
    return (
        <div className='container'>
            <div className='item-container'>
                {
                    myItems.map(item => <Item
                        key={item.key}
                        item={item}>
                    </Item>
                    )
                }
            </div>
        </div>
    );
};

export default MyItem;