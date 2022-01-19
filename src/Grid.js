import React, { Fragment } from "react";

const Grid = ({ config, data, Trailer, PokemonName }) => (
  <table class="table table-hover table-striped ">
    <thead>
      <tr>
        {config.map((con, index) => {
          if (con.title === "pokedex #" && con.field === "number") {
            return (
              <Fragment key={index}>
                <td>{con.title}</td>
                <td>{con.field}</td>
              </Fragment>
            );
          } else {
            return <td key={index}> {con.field} </td>;
          }
        })}
      </tr>
    </thead>
    <tbody>
      {data.map((data, index) => {
        const { imdbID, Title, imdbRating } = data;
        const { name, number } = data;

        if (imdbID && Title && imdbRating) {
          return (
            <tr key={index}>
              <td> {imdbID}</td>
              <td> {Title}</td>
              <td> {imdbRating}</td>
              <td>
                <Trailer data={data.Trailer} />
              </td>
            </tr>
          );
        }
        if (name && number) {
          return (
            <tr key={index}>
              <td> {name}</td>
              <td> {number}</td>
              <td>
                <PokemonName data={name} />{" "}
              </td>
            </tr>
          );
        }
      })}
    </tbody>
  </table>
);

export default Grid;
