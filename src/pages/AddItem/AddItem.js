import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        toast('data added successfully')
        const url = 'http://localhost:5000/productItem';
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        reset();

    };

    return (
        <div className='m-5 w-50 mx-auto'>
            <h2>Please add item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='supplier name' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='proto url' type="text" {...register("img")} />
                <input type="submit" value="Add new Item" />
            </form>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItem;