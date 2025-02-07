import React, {useEffect} from 'react'

const FetchDataEffect = () => {
    const[data, setData] = React.useState([]);

useEffect(() => {
    async function getData() {

        const response= await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();
        if (data && data.length) setData(data);
    }

    getData();


}, []);

    return (
        <div>
            {data.length > 0 && <h1>{data[0].title}</h1>}
        </div>
    )
}
export default FetchDataEffect
