import React from 'react'


function CollapsibleLogic(collapseState) {
    const [collapsed, setCollapsed] = React.useState(false);

    const handleVisibility = () => {
        setCollapsed(collapseState => !collapseState);
    }
  return [collapsed, handleVisibility]
  
}

export default CollapsibleLogic