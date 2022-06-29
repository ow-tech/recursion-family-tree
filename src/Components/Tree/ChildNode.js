import React,{useContext} from 'react'
import Tree from './Tree'
import { lastNodeClickedContext } from '../TreeList/TreeList'
import CollapsibleLogic from '../CollapsibleLogic';




function ChildNode({node, handleLastNodeClicked, handleVisibility}) {
    const {lastNodeClicked, setLastNodeClicked} = useContext(lastNodeClickedContext)
  return (
    <div className='childrenNodes' onClick={()=>setLastNodeClicked(()=>CollapsibleLogic(false))}>
               <Tree data ={node.languages} />
      </div>
    
  )
}

export default ChildNode