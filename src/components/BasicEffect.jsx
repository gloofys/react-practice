import React, {useEffect} from 'react'

const BasicEffect = () => {

    useEffect(() =>{
        console.log('render')

    })
    return (
        <div>BasicEffect</div>
    )
}
export default BasicEffect
