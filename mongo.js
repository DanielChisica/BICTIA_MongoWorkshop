//1. En una base de Datos llamada Taller, agregar los siguientes documentos a la colección peliculas:
db.createCollection("Movies");
db.Movies.insertMany([{"title":"Assassins Creed","director" : "Justin Kurzel", "year" : 2016},
{ "title" : "Corpse Bride", "director" : "Tim Burton", "year" : 2005 , "cast":["Johnny Depp","Helena Bonham - Carter"]},
{ "title" : "Tomb Raider", "director" : "Roar Uthaug", "year" : 2018 , "cast":["Alicia Vikander","Dominic West"]},
{ "title" : "Deadpool", "director" : "Tim Miller", "year" : 2016 , "cast":["Ryan Reynolds","Morena Bacarin"]},
{ "title" : "Avatar", "director" : "James Cameron", "year" : 2005 , "cast":["Sam Worthington","Zoe Saldaña","Sigourney Weaver"]},
{ "title" : "Edward Scissorhands", "director" : "Tim Burton", "year" : 1990 , "cast":["Johnny Depp","Winona Ryder"]},
{ "title" : "Sin City", "director" : "Quentin Tarantino", "year" : 2005 , "cast":["Bruce Willis","Jessica Alba"]},
{ "title" : "Pirates of the Caribbean: Dead Man's Chest", "director" : "Gore Verbinski", "year" : 2006 , "cast":["Johnny Depp","Orlando Bloom","Keira Knightley"]},
{ "title" : "The Lord of the Rings: The two towers", "director" : "Tim Burton", "year" : 2005 , "cast":["Orlando Bloom","Elijah Wood","Ian McKellen"]},
{ "title" : "Xmen Days of Future past", "director" : "Brian Singer", "year" : 2014 , "cast":["Ian McKellen","Hugh Jackman"]}]
);

//Consultas / Buscar documentos
//Realizar las siguientes consultas en la colección peliculas:
//a. Obtener todos los documentos
db.Movies.find({}).pretty();
//b. Obtener documentos con director igual a "Tim Burton"
db.Movies.find({"director":"Tim Burton"}).pretty();
//c. Obtener documentos con actores que incluyan a "Ian McKellen
db.Movies.find({"cast":{$in: ["Ian McKellen"] }}).pretty();
//d. Obtener documentos con año mayor a "2013"
db.Movies.find({"year":{$gte: 2013}}).pretty();
//e. Obtener todas las películas de los 90s.
db.Movies.find({"year":{$gte: 1990, $lte: 1999}}).pretty();
//f. Obtener las películas estrenadas entre el año 2000 y 2010.
db.Movies.find({"year":{$gte: 2000, $lte: 2010}}).pretty();

//Actualizar Documentos
//a. Agregar actores a nombre:  ́Assassins Creed
db.Movies.update( {"title":"Assassins Creed"}, {$set: {"cast":["Michael Fassbender","Marion Cotillard"]} } );
//b. Agregar sinopsis a "Deadpool"
db.Movies.update( {"title":"Deadpool"}, {$set: {"synopsis":"Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead (Brianna Hildebrand), Deadpool uses his new skills to hunt down the man who nearly destroyed his life."} } );
//c. Agregar una actor llamado "Tim Owen" a la película "Sin City"
db.Movies.update( {"title":"Sin City"}, {$addToSet: {"cast":"Tim Owen"} } );
//d. Agregar género a cada película
db.Movies.update( {"title":"Corpse Bride"}, {$set: {"genre":"Animation"} } )
db.Movies.update( {"title":"Tomb Raider"}, {$set: {"genre":"Action"} } )
db.Movies.update( {"title":"Deadpool"}, {$set: {"genre":"Action"} } )
db.Movies.update( {"title":"Avatar"}, {$set: {"genre":"sci-fi"} } )
db.Movies.update( {"title":"Edward Scissorhands"}, {$set: {"genre":"sci-fi"} } )
db.Movies.update( {"title":"Sin City"}, {$set: {"genre":"drama/crim"} } )
db.Movies.update( {"title":"Pirates of the Caribbean: Dead Man's Chest"}, {$set: {"genre":"sci-fi"} } )
db.Movies.update( {"title":"The Lord of the Rings: The two towers"}, {$set: {"genre":"sci-fi"} } )
db.Movies.update( {"title":"Xmen Days of Future past"}, {$set: {"genre":"superheroes"} } )
db.Movies.update( {"title":"Assassins Creed"}, {$set: {"genre":"action"} } );
//e. Agregar basado en a cada película
db.Movies.update( {"title":"Corpse Bride"}, {$set: {"Based on":"author"} } )
db.Movies.update( {"title":"Tomb Raider"}, {$set: {"Based on":"videogame"} } )
db.Movies.update( {"title":"Deadpool"}, {$set: {"Based on":"comic"} } )
db.Movies.update( {"title":"Avatar"}, {$set: {"Based on":"author"} } )
db.Movies.update( {"title":"Edward Scissorhands"}, {$set: {"Based on":"author"} } )
db.Movies.update( {"title":"Sin City"}, {$set: {"Based on":"comic"} } )
db.Movies.update( {"title":"Pirates of the Caribbean: Dead Man's Chest"}, {$set: {"Based on":"author"} } )
db.Movies.update( {"title":"The Lord of the Rings: The two towers"}, {$set: {"Based on":"books"} } )
db.Movies.update( {"title":"Xmen Days of Future past"}, {$set: {"Based on":"comic"} } )
db.Movies.update( {"title":"Assassins Creed"}, {$set: {"Based on":"videogame"} } );
//➔ Consultar cuántas películas están basadas en videojuegos
db.Movies.find({"Based on":"videogame"}).pretty();
//➔ Consultar cuántas películas están basadas en comics
db.Movies.find({"Based on":"comic"}).pretty();

//2. En la misma base de datos Taller, agregar en una colección llamada datos, los siguientes elementos:
db.createCollection("Data");
//a. Con base a dicha estructura agregar mínimo 3 personas con mínimo 5 lenguajes.
db.Data.insertMany([{name:"Shelcy", surname:"Calderon", age:17, interests: ["fly","gym","music"],languages: ["javascript","java","python","c","c++"]},
{name:"Daniel", surname:"Jimenez", age:21, interests: ["programming","films","dance","gym"],languages: ["php","python","c#","java","javascript"]},
{name:"Jose", surname:"Orellana", age:33, interests: ["beer","read","study","videogames"],languages: ["visual basic" , "javascript", "php","java","c#"]},
{name:"Kamilo", surname:"Munevar", age:28, interests: ["beer","videogames","music","women"],languages: ["java","php","javascript","unity","c++"]},
{name:"Nicolas", surname:"Zarate", age:20, interests: ["systems","sports","technology"],languages: ["javascript","python","php","c++","c"]}]);
//b. Actualizar el arreglo lenguajes (son lenguajes de programación) anexando mínimo tres lenguajes más. Uno de ellos debe estar en la posición 3
db.Data.updateMany({}, {$push: {languages: {$each: ["Dart","Kotlin","Ruby"], $position:2} } } );
//c. Ordenar los documentos de acuerdo a la edad de forma descendente.
db.Data.find().sort( {age:-1} )
//d. Obtener los primeros 5 lenguajes de todas las personas.
db.Data.find( {}, {languages: {$slice: [0,5]} } );
//e. Obtener todas las personas que tengan el lenguaje Python.
db.Data.find({"languages":{$in: ["python"] }}).pretty();
//f. Obtener todas las personas que no tengan el lenguaje PHP.
db.Data.find({"languages":{$nin: ["php"] }}).pretty();