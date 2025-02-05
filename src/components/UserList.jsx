import React from 'react'

const UserList = () => {

    const users = [
        {id:1, name:"Alice", age: 25},
        {id:2, name:"Bob", age: 30},
        {id:3, name:"Charlie", age: 22},
    ];



    return (
        <div>
            {users.map(({name, age})=> (
                <div key={users.id}>
                    <h1>{name}</h1>
                    <h1>{age}</h1>
                </div>
            ))}

        </div>
    )
}
export default UserList
