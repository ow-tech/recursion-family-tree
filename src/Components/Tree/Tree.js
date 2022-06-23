import React from 'react'
import TreeNode from './TreeNode'

function Tree( {data =[]}) {
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