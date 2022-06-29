import React from 'react'
import Tree from './Tree';
import ChildNode from './ChildNode';
import CollapsibleLogic from '../CollapsibleLogic';



function TreeNode({node}) {
  
  
    const [childVisible, setChildVisibility] =CollapsibleLogic(false)
    
    const hasChild = (node.countries || node.languages)? true:false;
  
   
    
  return (
    <>
      <div className="wrapperWithContent">
        <>
                <div onClick ={setChildVisibility } className="parent ">
                {node.name}
              </div>
        </>
        <>
          {
            hasChild && childVisible && <div>
                <div className='childrenNodes countries'>
                    <Tree data ={node.countries} key={node.ChildNode} />
                </div>
            </div>
        }
        {
            hasChild && childVisible  && 
            
               <ChildNode node={node} />
              
        }
        </>
        
        
        </div>  
    </>
  )
}



export default TreeNode

