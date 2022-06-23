import React, {useState, useEffect} from 'react'
import Tree from './Tree';


function TreeNode({node}) {
    const [childVisible, setChildVisibility] =useState(false)
    const hasChild = (node.countries || node.languages)? true:false;
  return (
    <>
      <li>
        <div>
            {/* {hasChild &&( */}
                <div onClick ={() => setChildVisibility(visible =>!visible)}>
                   
                {node.name}
            </div>
    
            {/* )} */}
            {/* <div></div> */}
            
        </div>
        {
            hasChild && childVisible && <div>
                <ul>
                    <Tree data ={node.countries || node.languages}/>
                </ul>
            </div>
        }
        
        </li>  
    </>
  )
}

export default TreeNode

