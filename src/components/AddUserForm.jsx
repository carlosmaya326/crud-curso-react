import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {
                ...register("name", { 
                    required: {
                        value: true,
                        message: 'Este campo es requerido'
                    }
                })
            }/>
            <span className="text-danger text-small d-block mb-2">
                {errors.name && errors.name.message}
            </span>
            <label>User Name</label>
            <input type="text" name="username" {
                ...register("username", { 
                    required: {
                        value: true,
                        message: 'Este campo es requerido'
                    }
                })
            }/>
            <span className="text-danger text-small d-block mb-2">
                {errors.username && errors.username.message}
            </span>
            <br />
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;