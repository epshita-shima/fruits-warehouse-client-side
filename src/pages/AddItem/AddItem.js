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
        <div className='m-5 w-75 mx-auto shadow-lg px-5 py-3'>
            <h2>Please Add Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <div class="input-group mb-2">
                    <span class="input-group-text w-25" id="basic-addon1">Item Name</span>
                    <input type="text" class="form-control" placeholder="item name" aria-label="Username" aria-describedby="basic-addon1" {...register("name", { required: true, maxLength: 20 })} />
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text w-25" id="basic-addon2">Supplier Name</span>
                    <input type="text" class="form-control" placeholder="supplier name" aria-label="Username" aria-describedby="basic-addon1=2" {...register("supplier", { required: true, maxLength: 20 })} />
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text w-25">Description</span>
                    <textarea class="form-control" aria-label="With textarea" placeholder='product description' {...register("description")} ></textarea>
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text w-25" id="basic-addon3" >Price</span>
                    <input type="number" class="form-control" placeholder="Price" aria-label="price" aria-describedby="basic-addon3"  {...register("price")} />
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text w-25" id="basic-addon4" >quantity</span>
                    <input type="number" class="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="basic-addon4"  {...register("quantity")} />
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text w-25" id="basic-addon5" >Proto URL</span>
                    <input type="url" class="form-control" placeholder="proto URL" aria-label="proto url" aria-describedby="basic-addon5"  {...register("image")} />
                </div>
                <input type="submit" className='btn border-0 text-light w-50 d-flex mx-auto align-items-center justify-content-center' style={{ background: '#89B140' }} value="Add new Item" />
            </form>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItem;