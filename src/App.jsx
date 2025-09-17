import { useState, useMemo } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.min.css";

const data = [
  { Nombre: "Diego", Apellido: "Ramirez", Sector: "Design", Codigo: "123-456-789" },
  { Nombre: "Lisa", Apellido: "Smith", Sector: "Programming", Codigo: "987-654-321" },
  { Nombre: "Wei", Apellido: "Chen", Sector: "Architecture", Codigo: "456-789-123" },
  { Nombre: "Mohammed", Apellido: "Khan", Sector: "Development", Codigo: "789-123-456" },
  { Nombre: "Anna", Apellido: "Petrova", Sector: "IT Support", Codigo: "321-654-987" },
  { Nombre: "Juan", Apellido: "Garcia", Sector: "Programming", Codigo: "654-987-321" },
  { Nombre: "Sophie", Apellido: "Martin", Sector: "Design", Codigo: "987-123-654" },
  { Nombre: "Kenji", Apellido: "Suzuki", Sector: "Development", Codigo: "456-789-321" },
  { Nombre: "Isabella", Apellido: "Rossi", Sector: "IT Support", Codigo: "123-456-987" },
  { Nombre: "Oliver", Apellido: "Nielsen", Sector: "Architecture", Codigo: "654-321-987" },
  { Nombre: "Maria", Apellido: "Hernandez", Sector: "Development", Codigo: "789-123-456" },
  { Nombre: "Chen", Apellido: "Wei", Sector: "IT Support", Codigo: "321-654-789" },
  { Nombre: "Mohammed", Apellido: "Al-Farsi", Sector: "Programming", Codigo: "987-321-654" },
  { Nombre: "Ayumi", Apellido: "Yamamoto", Sector: "Design", Codigo: "456-987-123" },
  { Nombre: "Laura", Apellido: "Gomez", Sector: "Development", Codigo: "123-654-789" },
  { Nombre: "Lucas", Apellido: "Costa", Sector: "IT Support", Codigo: "789-321-654" },
  { Nombre: "Emma", Apellido: "Lindström", Sector: "Programming", Codigo: "654-987-123" },
  { Nombre: "Jacques", Apellido: "Dubois", Sector: "Design", Codigo: "987-123-456" },
  { Nombre: "Thomas", Apellido: "Miller", Sector: "Architecture", Codigo: "123-456-789" },
  { Nombre: "Yuki", Apellido: "Tanaka", Sector: "IT Support", Codigo: "987-654-321" },
  { Nombre: "Natalia", Apellido: "Garcia", Sector: "Programming", Codigo: "456-789-123" },
  { Nombre: "Peter", Apellido: "Andersen", Sector: "Development", Codigo: "789-123-456" },
  { Nombre: "Amélie", Apellido: "Dubois", Sector: "IT Support", Codigo: "321-654-987" },
  { Nombre: "Carlos", Apellido: "Fernández", Sector: "Design", Codigo: "654-987-321" },
  { Nombre: "Mai", Apellido: "Nguyen", Sector: "Architecture", Codigo: "987-123-654" },
  { Nombre: "David", Apellido: "Lee", Sector: "Development", Codigo: "456-789-321" }
];

const App = () => {
  const [query, setQuery] = useState("");
  const filteredData = useMemo(() => data.filter(row =>
    Object.values(row).some(val => val.toUpperCase().includes(query.toUpperCase()))
  ), [query]);

  return (
    <div className="section" style={{background: "linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)", minHeight: "100vh", paddingTop: "2rem"}}>
      <input
        className="input mb-4"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{width: "60%", marginInline: "auto", fontSize: "1.1rem"}}
      />
      <table className="table is-fullwidth is-hoverable" style={{width: "60%", marginInline: "auto", fontSize: "1.1rem"}}>
        <thead>
          <tr style={{backgroundColor: "#ddd"}}>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Sector IT</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr key={idx}>
              <td style={{backgroundColor: "#e2c9cc"}}>{row.Nombre}</td>
              <td style={{backgroundColor: "#e2c9cc"}}>{row.Apellido}</td>
              <td style={{backgroundColor: "#e2c9cc"}}>{row.Sector}</td>
              <td style={{backgroundColor: "#e2c9cc"}}>{row.Codigo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(<App />);

export default App;
