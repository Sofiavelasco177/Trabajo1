let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
  { nombre: "Inception", año: 2010, protagonistas: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"] },
  { nombre: "The Matrix", año: 1999, protagonistas: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"] },
  { nombre: "Interstellar", año: 2014, protagonistas: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"] }
];
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio: $", precio);
console.log("Series favoritas:", seriesFavoritas.join(", "));
console.log("Películas favoritas:");
peliculasFavoritas.forEach(pelicula => {
  console.log(`- ${pelicula.nombre} (${pelicula.año}) - Protagonistas: ${pelicula.protagonistas.join(", ")}`);
});
