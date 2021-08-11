import { gql } from "@apollo/client";

// we write query/mutation in graphql here

//String! how we define types in graphql

//export every query in form of variable
export const GET_WEATHER_QUERY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;
