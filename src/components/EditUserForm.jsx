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
            
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;