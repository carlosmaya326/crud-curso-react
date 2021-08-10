import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name',  props.currentUser.name);
    setValue('username',  props.currentUser.username);

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id;
        props.editUser(props.currentUser.id, data);

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
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;