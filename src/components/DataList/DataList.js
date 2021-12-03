import React from 'react'
import './DataList.css'
import { FaEdit, FaTrash } from "react-icons/fa";

const DataList = ({ props, editItem, deleteItem, handleOnChange, checkedState, deleteSelected, batchdelete }) => {
    console.log(batchdelete)
    console.log(props)

    return (
        <div className="container">
            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1"></div>
                    <div className="col col-2">Employee Name</div>
                    <div className="col col-3">Employee Id</div>
                    <div className="col col-4">Designation</div>
                    <div className="col col-5">Employee Type</div>
                    <div className="col col-6">Date of Joining</div>
                    <div className="col col-7">Email</div>
                    <div className="col col-8">DOB</div>
                    <div className="col col-9">Edit</div>
                    <div className="col col-10">Delete</div>
                </li>
                {props.length > 0 ?
                    props.map(({ id, name, empId, role, email, dob, type, doj }) => {
                        return (
                            <li className="table-row" key={id}>
                                <div className="col col-1" data-label="select">
                                    <input type="checkbox" id={id} name={id} value={name} checked={checkedState[id]}
                                        onChange={(e) => handleOnChange({ id }, e)} />
                                </div>
                                <div className="col col-2 data-text" data-label="Name">{name}</div>
                                <div className="col col-3 data-text" data-label="Id">{empId}</div>
                                <div className="col col-4 data-text" data-label="role">{role}</div>
                                <div className="col col-5 data-text" data-label="type">{type}</div>
                                <div className="col col-6 data-text" data-label="doj">{doj}</div>
                                <div className="col col-7" data-label="email">{email}</div>
                                <div className="col col-8 data-text" data-label="dob">{dob}</div>
                                <div className="col col-9 data-text" data-label="edit"> <FaEdit className="edit" onClick={() => editItem(id)} /></div>
                                <div className="col col-10 data-text" data-label="delete"> <FaTrash className="delete" onClick={() => deleteItem(id)} /></div>
                            </li>
                        )
                    })
                    : <p>No item(s) to show</p>}
            </ul>
            <div>
                {props.length > 0 ? <button className="delete-btn" onClick={() => deleteSelected()}>Delete Selected</button> : null}
            </div>
        </div>
    )
}
export default DataList