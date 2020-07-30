import React from "react"

//Contains all other components, ensures they are centered properly
const Wrapper = (props) => {
  return <div className="wrapper">{props.children}</div>
}
export default Wrapper
