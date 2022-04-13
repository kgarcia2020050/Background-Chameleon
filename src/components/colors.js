import "../style/button.css"

function VerColor({name}) {
  return (
    <div id="carta" className="card col-4">
      <div className="card-body">El color de fondo es {name}.</div>
    </div>
  );
}

export default VerColor;