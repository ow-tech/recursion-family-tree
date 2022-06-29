import React, { useEffect } from 'react'
import TreeNode from './TreeNode'
import { lastNodeClickedContext } from '../TreeList/TreeList'

function Tree( {data =[]}) {

  const value = React.useContext(lastNodeClickedContext); 


  useEffect(()=>{
    if (value){
      console.log(value)
    }
   

  },[value])
  
  return (

    <div className='center'>
        <div className='pointer'>
            {data.map(tree =>(
                <TreeNode node ={tree}/>
            ))}
        </div>
    </div>
  )
}

export default Tree