
import { initializeLifeCycleEventTracking } from "./AppStateListener"
import defaultOptions from "./defaultOptions.json"
import { initializeNavigationTracking } from "./NavigationListener"
import {initializeGarudDwarAPI, sendEventAPI} from  './API'
import { eventRef } from "./eventRef"
export const initializeGarudDwar=(data=defaultOptions)=>{
    if(data?.trackLifeCycleEvents)
    {
        initializeLifeCycleEventTracking()
    }
    if(data?.navigationRef && data?.trackNavigations)
    {
        initializeNavigationTracking()
    }
  
    if(data?.webhookURL && data?.key)
    { 
        eventRef.current.event={}
        eventRef.current.event=defaultOptions
        initializeGarudDwarAPI(data)
    }
}
export const sendEvents=(data)=>{
    let eventData={...data}
    let ignoreEvent=false

    if(eventRef?.current?.event?.beforeSend)
    {
        eventData= eventRef?.current?.event?.beforeSend(data) 
        if(eventData===false)return
    }
    if(eventRef?.current?.event?.ignoreLogs)
    {
    const eventName=eventData?.name
    eventRef?.current?.event?.ignoreLogs?.forEach(text => {
       if( text.match(eventName))
       {ignoreEvent=true

       }
    });

    }
    if(ignoreEvent)return
   sendEventAPI(eventData)
}


export default {initializeGarudDwar,sendEvents}