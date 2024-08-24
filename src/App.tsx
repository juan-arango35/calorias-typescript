import { useReducer } from "react"

import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"

function App() {
 // dispatch es una funcion que permite ejecutar las acciones
  const [state , dispatch] = useReducer( activityReducer, initialState)

  return (
    <>
    <header className="bg-lime-500 py-3">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>
      </div>

    </header>
    <section className="bg-lime-400 py-20 px-5">
      <div className="max-w-4xl mx-auto">
       <Form
       dispatch={dispatch}
       />
      </div>

    </section>
    </>
  )
}

export default App
