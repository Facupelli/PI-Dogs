import React from "react";

export default function Filters() {
  return (
    <div>
      <select>
        <option value="temp">Temperament</option>
      </select>
      <select>
        <option value="Raza">Breed</option>
        <option value="created">Created Breed</option>
      </select>
      <select>
        <option value="raza_asc">Breed Ascendente</option>
        <option value="raza_desc">Breed Descendente</option>
      </select>
      <select>
        <option value="peso_asc">Weight Ascendente</option>
        <option value="peso_desc">Weight Descendente</option>
      </select>
    </div>
  );
}
