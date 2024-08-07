import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const People = () => {
  const navigate = useNavigate();

  const [people, setPeople] = useState([]); // react - hook

  const getPeople = async () => {
    await fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setPeople(data.data);
      })
      .catch((err) => console.log(err));
  };

  // Component Life Cycle

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>People List</h1>
      <div className="row justify-content-center">
        {people.map((person) => {
          const { id, first_name, last_name, avatar } = person;

          return (
            <div
              key={id}
              className="col-sm-12 col-md-6 col-lg-4"

              //! absolute path
            // onClick={() => navigate(`/people/${id}`)}

            //   onClick={() => navigate(`/people/${id}`, {state: person})}

                //! relative path
                onClick={() => navigate(`${id}`)}

            >


              <img src={avatar} alt="profilPhoto" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
