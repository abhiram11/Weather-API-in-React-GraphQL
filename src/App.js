import "./App.css";
import Home from "./Pages/Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // HttpLink,
} from "@apollo/client";
//apollo client handle frontend api calls to graphql,

//we wrap different components that we wanna make api calls with apollo client provider

//put all queries for api calls in the frontend (/src/graphql made)

// in rest api call, we define things on backednd as well, but graphql is dynamic

function App() {
  const client = new ApolloClient({
    //parameters to create the server
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/", //link for our api (heroku) where we fetch data from
    // we dont even need HttpLink for this, since we are using a public api
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
