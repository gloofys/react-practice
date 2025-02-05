import React from 'react'

const Person = () => {
    return <User name="Fred" age="31"/>
};

// eslint-disable-next-line react/prop-types
const User = ({name, age}) => {
    return (
        <section>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
        </section>
    )
}
export default Person
