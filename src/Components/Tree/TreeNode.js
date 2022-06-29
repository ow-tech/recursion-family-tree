import React, {useState, useEffect, useContext} from 'react'
import Tree from './Tree';
import { lastNodeClickedContext } from '../TreeList/TreeList';



function TreeNode({node}) {
  
    const {lastNodeClicked, setLastNodeClicked} = useContext(lastNodeClickedContext)
    const [childVisible, setChildVisibility] =useState(false)
    
    const hasChild = (node.countries || node.languages)? true:false;
    
    const handleVisibility = (e)=>{
      setLastNodeClicked(true)
      setChildVisibility(visible =>!visible)

      // setLastNodeClicked(visible =>!visible)
    }
    const handleLastNodeClicked =()=>{
      setLastNodeClicked(e => !e) 
      setChildVisibility(e=>!e)
    }
    useEffect(()=>{
      

    },[lastNodeClicked])
   
    
  return (
    <>
      <div className="wrapperWithContent">
        <>
                <div onClick ={(e)=>handleVisibility(e) } className="parent">
                {node.name}
              </div>
        </>
        {lastNodeClicked?
        <>
        
          {
            hasChild && childVisible && <div>
                <div className='childrenNodes'>
                    <Tree data ={node.countries} />
                </div>
            </div>
        }
        {
            hasChild && childVisible  && 
            
                <div className='childrenNodes' onClick={(e)=>handleLastNodeClicked(e)}>
                  <Tree data ={node.languages} />
              </div>
        }
        </>
           :null
            }
        
        
        </div>  
    </>
  )
}



export default TreeNode

