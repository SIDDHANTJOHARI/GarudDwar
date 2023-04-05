import {AppState} from "react-native"
import {sendEvents} from "./index"
const initializeLifeCycleEventTracking=()=>{
AppState.addEventListener('change',(state)=>{
    sendEvents({name:`App State Changed change to ${state}`})
})
}
export {initializeLifeCycleEventTracking}