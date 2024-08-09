import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router";

const PersonDetail = () => {

    // const { state: person } = useLocation()
    // console.log(person)

    const { id } = useParams();
    console.log(id)

    const navigate = useNavigate()

    const [person, setPerson] = useState("")

    const getPerson = async () => {

        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log(response.data.data)
            setPerson(response.data.data)
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        getPerson()
    }, [])



    return (
        <div className="container text-center">
            <h3>{person?.first_name} {person?.last_name}</h3>
            <img src={person?.avatar} alt="person-profile"/>
            <p>{person?.email}</p>
            <div>
                <button className="btn btn-success me-2" onClick={() => navigate("/")}>Go Home</button>
                <button className="btn btn-warning" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default PersonDetail;