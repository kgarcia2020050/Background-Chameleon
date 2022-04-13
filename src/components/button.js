import "../style/button.css";


export function CambiarColor({accion}) {
  return (
    <div className="d-grid gap-2 col-4 mx-auto">
      <button id="boton" className="btn btn-outline-dark" onClick={accion}>
        Click aquí
      </button>
    </div>
  );
}
