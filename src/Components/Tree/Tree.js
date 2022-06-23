import React from 'react'
import TreeNode from './TreeNode'

function Tree( {data =[]}) {
  return (
    <div>
        <ul>
            {data.map(tree =>(
                <TreeNode node ={tree}/>
            ))}
        </ul>
    </div>
  )
}

export default Tree