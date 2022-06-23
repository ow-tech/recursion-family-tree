import React, {useState, useEffect} from 'react'
import Tree from '../Tree/Tree.js';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
  


// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });
// GraphQL query schema of Continent, Country and Language

const continentsCountriesLanguages = gql `
{continents{
    name
    countries{
      name
      languages{
        name
      }
    }
  }}
`

function TreeList() {
    const [treeData, setTreeData] = useState()
    const {data, loading, error} = useQuery(continentsCountriesLanguages, {client});
   

    useEffect(() => {
        if(data){
            setTreeData(data['continents'])
        }
        
      },[data])

  return (
    
        (loading ? <p>loading...</p>: error? <p>error.message</p>:
        <Tree data ={treeData}/>) 
    
    
  )
}

export default TreeList

