import React, { useEffect, useContext } from 'react'
import TreeNode from './TreeNode'
import { lastNodeClickedContext } from '../TreeList/TreeList'

function Tree( {data =[]}) {

  const {lastNodeClicked, setLastNodeClicked} = useContext(lastNodeClickedContext)


  // useEffect(()=>{
  //   if (value){
  //     // console.log(value)
  //   }
   

  // },[value])
  
  return (

    <div className='center'>
        <div className='pointer'>
            {data.map(tree =>(
              <TreeNode key={tree.name} node={tree} />
                // <TreeNode node ={tree}/>
            ))}
        </div>
    </div>
  )
}

export default Tree