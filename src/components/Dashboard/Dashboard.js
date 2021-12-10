import React, { useState } from 'react'
import './Dashboard.css';
import { FaSort, FaFilter } from "react-icons/fa";

const Dashboard = () => {

    const [data, setData] = useState([])
    const [api, setAPi] = useState(true)
    const [isAscending, setIsAscending] = useState(true)
    const [isEmpId, setIsEmpId] = useState(true)
    const [isJoined, setJoined] = useState(true)
    const [isdob, setDob] = useState(true)

    if (api) {
        console.log(api)
        const response = JSON.parse(localStorage.data)
        setData(response)
        console.log(data)
        setAPi(false)
    }
    const sortArray = (e) => {
        console.log(e.target.id)
        const sortProperty = e.target.id;
        console.log(sortProperty)
        if (isAscending) {
            const sorted = data.sort((a, b) => (a[sortProperty] > b[sortProperty]) ? 1 : -1)
            // if (a[sortProperty] < b[sortProperty]) { return -1; }
            // if (a[sortProperty] > b[sortProperty]) { return 1; }
            // return 0;
            // return (a[sortProperty] < b[sortProperty]) ? -1 : (a[sortProperty] > b[sortProperty]) ? 1 : 0;
            setData(sorted)
            console.log(sorted, "top")
        } else {
            const sorted = data.sort((a, b) => (a[sortProperty] > b[sortProperty]) ? -1 : 1)
            setData(sorted)
            console.log(sorted, "bottom")
        }

        setIsAscending(!isAscending)
    }

    const sortById = (e) => {
        const sortId = e.target.id
        console.log(sortId)
        if (isEmpId) {
            const sortEmpid = data.sort((a, b) => (parseFloat(a[sortId] - b[sortId])))
            setData(sortEmpid)
            console.log(sortEmpid, "41")
        }
        else {
            const sortEmpid = data.sort((a, b) => (parseFloat(b[sortId] - a[sortId])))
            setData(sortEmpid)
            console.log(sortEmpid, "42")
        }
        setIsEmpId(!isEmpId)
    }

    const sortByDoj = (e) => {
        const sortDoj = e.target.id
        if (isJoined) {
            const sortJoinDate = data.sort((a, b) => {
                a = a[sortDoj].split("/").reverse().join("-")
                b = b[sortDoj].split("/").reverse().join("-")
                return a.localeCompare(b)
            })
            setData(sortJoinDate)
            console.log(sortJoinDate, "dojTop")
        } else {
            const sortJoinDate = data.sort((a, b) => {
                a = a[sortDoj].split("/").reverse().join("-")
                b = b[sortDoj].split("/").reverse().join("-")
                return b.localeCompare(a)
            })
            setData(sortJoinDate)
            console.log(sortJoinDate, "dojbottom")
        }
        setJoined(!isJoined)
    }

    const sortByDob = (e) => {
        const sortDob = e.target.id
        if (isdob) {
            const sortDOB = data.sort((a, b) => {
                a = a[sortDob].split("/").reverse().join("-")
                b = b[sortDob].split("/").reverse().join("-")
                return a.localeCompare(b)
            })
            setData(sortDOB)
            console.log(sortDOB, "dobTOp")
        } else {
            const sortDOB = data.sort((a, b) => {
                a = a[sortDob].split("/").reverse().join("-")
                b = b[sortDob].split("/").reverse().join("-")
                return b.localeCompare(a)
            })
            setData(sortDOB)
            console.log(sortDOB, "dobBottom")
        }
        setDob(!isdob)
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-filter">
                <FaFilter /><input type="text" placeholder="Enter name/designation/type,id" className="input-filter" />
            </div>
            <table className="tabel-wrapper">
                <tbody >
                    <tr>
                        <th>Employee Name <button id="name" value="name" name="name" onClick={(e) => sortArray(e)}><FaSort id="name" /></button></th>
                        <th>Employee Id <button id="empId" value="empId" name="empId" onClick={(e) => sortById(e)}><FaSort id="empId" /></button></th>
                        <th>Designation</th>
                        <th>Employee Type</th>
                        <th>Date of Joining <button id="doj" value="doj" name="doj" onClick={(e) => sortByDoj(e)}><FaSort id="doj" /></button></th>
                        <th>Email</th>
                        <th>Date of Birth <button id="dob" value="dob" name="dob" onClick={(e) => sortByDob(e)}><FaSort id="dob" /></button></th>
                    </tr>

                    {data.map((item) => {
                        return (

                            <tr className="details-row" key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.empId}</td>
                                <td>{item.role}</td>
                                <td>{item.type}</td>
                                <td>{item.doj}</td>
                                <td>{item.email}</td>
                                <td>{item.dob}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default Dashboard