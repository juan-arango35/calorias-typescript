import { useState, ChangeEvent, FormEvent, Dispatch , useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";

type FormProps = { dispatch: Dispatch<ActivityActions>; state: ActivityState };

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

const Form = ({ dispatch, state }: FormProps) => {
  const [actividad, setActividad] = useState<Activity>(initialState);
  useEffect(() => {
  if(state.activeId){
   const selectActivity = state.activities.filter( stateActivity =>stateActivity.id === state.activeId)[0]
   setActividad(selectActivity)
  }
  }, [state.activeId])

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    // para ver que los valores son numeros:

    const isNumberField = ["category", "calories"].includes(e.target.id);
    setActividad({
      ...actividad,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = actividad;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: actividad } });
    setActividad({
      ...initialState,
      id: uuidv4(),
    });
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoria
        </label>
        <select
          value={actividad.category}
          onChange={handleChange}
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {" "}
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Activity
        </label>
        <input
          id="name"
          type="text"
          className="border border-slate-100 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de naranja, ejercicio, pesas, bicicleta"
          value={actividad.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias
        </label>
        <input
          id="calories"
          type="number"
          className="border border-slate-100 p-2 rounded-lg"
          placeholder="calorias: Ej. 300 o 500 calorias"
          value={actividad.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-950 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-2xl disabled:opacity-10"
        value={
          actividad.category === 1 ? "Guardar Comida " : "Guargar Ejercicio"
        }
        disabled={!isValidActivity()}
      />
    </form>
  );
};

export default Form;
