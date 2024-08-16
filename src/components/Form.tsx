import { categories } from "../data/categories";

const Form = () => {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoria
        </label>
        <select
          name=""
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
        <label htmlFor="category" className="font-bold">
          Activity
        </label>
        <input
          id="activity"
          type="text"
          className="border border-slate-100 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de naranja, ejercicio, pesas, bicicleta"
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
        />
      </div>
      <input type="submit" 
      
      className="bg-gray-800 hover:bg-gray-950 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-2xl"
      value='Guardar comida o ejercicio'
      />
    </form>
  );
};

export default Form;
