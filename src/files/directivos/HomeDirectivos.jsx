import { Calendar } from "../../components/Calendar"

export const HomeDirectivos = () => {
  return (
    <>
      <div className="divBackground">
        <div className="divColumns">
          <div className="divColumn">
            <Calendar></Calendar>
          </div>
          <div className="divColumn">
          </div>

        </div>
      </div>

      <div className="divBackground">
        <h2>Crear Evento</h2>
      </div>
    </>
  )
}
