import React,{useContext} from 'react'
import Tree from './Tree'
import { lastNodeClickedContext } from '../TreeList/TreeList'
import CollapsibleLogic from '../CollapsibleLogic';




function ChildNode({node}) {
    const {lastNodeClicked, setLastNodeClicked} = useContext(lastNodeClickedContext)
  return (
    <div className='lastNodes' onClick={()=>setLastNodeClicked(()=>CollapsibleLogic(false))}>
               <Tree data ={node.languages} />
      </div>
    
  )
}

export default ChildNode