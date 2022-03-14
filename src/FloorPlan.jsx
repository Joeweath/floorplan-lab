import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"
import Bedroom from "./Bedroom"

function FloorPlan(props) {
  return (
  <div>
    <Kitchen />
    <LivingRoom />
    <Bedroom bedNum={1}/>
    <Bedroom bedNum={2}/>
    <Bedroom bedNum={3}/>
    <Bath  size='Half'/>
    <Bath  size='Full'/>
  </div>
  
  )

}


export default FloorPlan