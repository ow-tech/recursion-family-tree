import React, {useState, useEffect,useContext, createContext} from 'react'
import Tree from '../Tree/Tree.js';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
// import { UserContext } from '../Tree/TreeNode.js';
import CollapsibleLogic from '../CollapsibleLogic';
  


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
export const lastNodeClickedContext = createContext();
function TreeList() {
  
    const [treeData, setTreeData] = useState()
    const [lastNodeClicked, setLastNodeClicked] =CollapsibleLogic(true)
    const {data, loading, error} = useQuery(continentsCountriesLanguages, {client});
  

    useEffect(() => {
        if(data){
            setTreeData(data['continents'])
            
        }
        
      },[data, lastNodeClicked])

  return (
     
      (loading ? <p>loading...</p>: error? <p>error.message</p>:
      <>
     
      <div className='wrapper'>
      <lastNodeClickedContext.Provider value={{lastNodeClicked, setLastNodeClicked}}>
         <Tree data ={treeData} key={lastNodeClicked}/>
         </lastNodeClickedContext.Provider>
        </div>
       
      </>
       
        ) 
      
    
        
    
    
  )
}

export default TreeList

