import React, { useEffect, useState } from "react";
import "./css/style.css";


const TempApp = () => {
const [city, setCity] = useState(null);
const [search, setSearch] = useState("");

const key = "7f96c21037ad500bfc78a8e459df9e5b";

useEffect( () => {
   
    const fetchApi = async() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        const response = await fetch(url);
        //console.log(response);
        const JsonRes = await response.json();
        console.log(JsonRes);
        setCity(JsonRes.main);
    };
    fetchApi();
},[search]);

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input placeholder="Enter City" type="search" className="inputField" onChange={ (e) => {setSearch(e.target.value)} }></input>
                </div>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                    <>
                    <div className="info">
                    <h2 className="location">
                    <i className="fas fa-street-view"></i>
                    {search}
                    </h2>
                    <h1 className="temp">
                    {city.temp}°C
                    </h1>
                    <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                    </div>
                    </>
                    )
                }   
            </div>
            

                
        </>
    );
};

export default TempApp;

// https://api.openweathermap.org/data/2.5/weather?q=Bareilly&appid=7f96c21037ad500bfc78a8e459df9e5b

// 7f96c21037ad500bfc78a8e459df9e5b