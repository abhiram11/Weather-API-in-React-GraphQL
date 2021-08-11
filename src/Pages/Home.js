import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
//import the query that we just created
import { GET_WEATHER_QUERY } from "../graphql/Queries";

//we dont want graphql data when we load the component (default), we need it when we click button
// called USE LAZY QUERY

//if we created graphql api from backend on our own, we have to define name of fn, what info is sent.. etc..
function Home() {
  const [citySearched, setCitySearched] = useState("");

  //loading is boolean, error? cached in error variable
  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      //pass the variables here
      variables: { name: citySearched },
    }
  );

  if (error) return <h1> Error Found</h1>;

  //if data has been received
  if (data) {
    console.log("data received? :", data);
  }

  return (
    <div className="home">
      <h1>Search for Weather!</h1>
      <input
        type="text"
        placeholder="City Name"
        onChange={(event) => {
          setCitySearched(event.target.value);
        }}
      />
      <button onClick={() => getWeather()}>Search</button>
      <div className="weather">
        {data && (
          <>
            <h1>City Name : {data?.getCityByName.name}</h1>
            <h1>
              {" "}
              Temperature : {
                data?.getCityByName.weather.temperature.actual
              }{" "}
            </h1>
            <h1>
              {" "}
              Description : {
                data?.getCityByName.weather.summary.description
              }{" "}
            </h1>
            <h1> Wind : {data?.getCityByName.weather.wind.speed} </h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
