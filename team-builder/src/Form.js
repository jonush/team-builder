import React from "react";
import "./App.css";

function Form(props) {
    const { values, onInputChange, onSubmit } = props;

    return (
        <form>
            <h2>Add a Team Member:</h2>

            <label>
                Name:&nbsp;
                <input
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                />
            </label>

            <label>
                Email:&nbsp;
                <input
                    name='email'
                    value={values.email}
                    onChange={onInputChange}
                />
            </label>

            <label>
                Role:&nbsp;
                <select
                    name='role'
                    value={values.role}
                    onChange={onInputChange}
                >
                    <option>Select a Role</option>
                    <option value='Front-end Web Developer'>Front-end Web Developer</option>
                    <option value='Back-end Web Developer'>Back-end Web Developer</option>
                    <option value='Designer'>Designer</option>
                    <option value='Data Scientist'>Data Scientist</option>
                    <option value='Product Manager'>Product Manager</option>
                </select>
            </label>

            <button className='submit' onClick={onSubmit}>Add Member</button>
        </form>
    );
}

export default Form;
