import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function Read() {
    const [data, setData] = useState([])
    const { id } = useParams()
    //  The useParams hook in React Router is used to access parameters from the URL in a React component.
    //  It allows your component to dynamically retrieve and use the data passed through route parameters.
    useEffect(() => {
        axios.get("http://localhost:3000/users/" + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100 w-100" >
            <div className="w-50 border bg-white shadow px-5 pb-5 rounded">
                <h3>Detail of User</h3>
                <div className="mb2">
                    <strong>Name:{data.name}</strong>
                </div>
                <div className="mb2">
                    <strong>Email:{data.email}</strong>
                </div>
                <div className="mb2">
                    <strong>Phone:{data.phone}</strong>
                </div>
                <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div >
    )
}

export default Read