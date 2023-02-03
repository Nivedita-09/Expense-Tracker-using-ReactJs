import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Alice",
      age: 32,
      skill: "React",
    },

    {
      id: 3,
      name: "Bob",
      age: 23,
      skill: "Next",
    },
    {
      id: 4,
      name: "Nive",
      age: 21,
      skill: "Next",
    },
  ];

  return (
    <div>
      {persons.map((person) => (
        <h2>
          I am {person.name}. My age is {person.age}. My skill is {person.skill}
          .{" "}
        </h2>
      ))}
    </div>
  );
}

export default NameList;
