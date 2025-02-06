
    const Cold=()=><h1>it/s cold outside</h1>;
    const Nice=() =><h1>it\s nice outside</h1>;
    const Hot=() =><h1>it\s hot outside</h1>

    const Temperature = () => {
        const temp = Math.random() * 30
if(temp < 15){
    return <Cold/>
}
else if(temp>=15 && temp<25){
    return <Nice/>
}
else
    return <Hot/>

    }

const Weather = () => {

    return <section>
        <Temperature/>

    </section>
}
export default Weather
