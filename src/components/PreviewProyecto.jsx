import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PreviewProyecto = ({ proyecto }) => {
  const { auth } = useAuth();
  const { nombre, _id, cliente, creador } = proyecto;

  return (
    <div className="border-b p-5 flex flex-col md:flex-row justify-between">
      <div className="flex items-center gap-2">
        <p className="flex-1">
          {nombre}{" "}
          <span className="text-gray-500 text-sm uppercase ">
            {""}
            {cliente}
          </span>
        </p>
        {auth._id !== creador && (
          <p className="p-2 text-xs rounded-md text-white bg-green-600 font-bold uppercase">
            Colaborador
          </p>
        )}
      </div>

      <Link
        to={`${_id}`}
        className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold "
      >
        Ver Proyecto
      </Link>
    </div>
  );
};

export default PreviewProyecto;
