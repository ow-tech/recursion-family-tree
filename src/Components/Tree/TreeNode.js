import React, {useState, useEffect} from 'react'
import Tree from './Tree';


function TreeNode({node}) {
    const [childVisible, setChildVisibility] =useState(false)
    const hasChild = (node.countries || node.languages)? true:false;
  return (
    <>
      <div >
        <div>
            {/* {hasChild &&( */}
                <div onClick ={() => setChildVisibility(visible =>!visible)} className="parent">
                   
                {node.name}
            </div>
    
            {/* )} */}
            {/* <div></div> */}
            
        </div>
        {
            hasChild && childVisible && <div>
                <div className=''>
                    <Tree data ={node.countries || node.languages} />
                </div>
            </div>
        }
        
        </div>  
    </>
  )
}

export default TreeNode

