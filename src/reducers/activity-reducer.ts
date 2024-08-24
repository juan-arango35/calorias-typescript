import { Activity } from "../types"

export type ActivityActions = {

    type: "save-activity" ,  payload: {newActivity :  Activity}
}

type ActivityState = {
    // este tipo se llama activities
    activities: Activity[]

}

export const initialState: ActivityState ={
    //activities inicia con un array vacio
activities:[]
}

export const activityReducer =(
    state : ActivityState = initialState,
    action: ActivityActions
)=>{
    if(action.type === "save-activity"){
        // este codigo menja la logica para actualizar el state
       
    }
    return {
        ...state, 
        activities: [...state.activities, action.payload.newActivity]
    }
}