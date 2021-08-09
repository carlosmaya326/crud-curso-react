import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {
                ...register("name", { 
                    required: true 
                })
            }/>
            {errors?.name && <div>Campo requerido</div>} 
            <label>User Name</label>
            <input type="text" name="username" {
                ...register("username", { 
                    required: true 
                })
            }/>
            {errors?.username && <div>Campo requerido</div>} 
            
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;