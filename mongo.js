db.createCollection("Movies");
db.Movies.insertMany([{ "title" : "Corpse Bride", "director" : "Tim Burton", "year" : 2005 , "cast":["Johnny Depp","Helena Bonham - Carter"]},
{ "title" : "Tomb Raider", "director" : "Roar Uthaug", "year" : 2018 , "cast":["Alicia Vikander","Dominic West"]},
{ "title" : "Deadpool", "director" : "Tim Miller", "year" : 2016 , "cast":["Ryan Reynolds","Morena Bacarin"]},
{ "title" : "Avatar", "director" : "James Cameron", "year" : 2005 , "cast":["Sam Worthington","Zoe Saldaña","Sigourney Weaver"]},
{ "title" : "Edward Scissorhands", "director" : "Tim Burton", "year" : 1990 , "cast":["Johnny Depp","Winona Ryder"]},
{ "title" : "Sin City", "director" : "Quentin Tarantino", "year" : 2005 , "cast":["Bruce Willis","Jessica Alba"]},
{ "title" : "Pirates of the Caribbean: Dead Man's Chest", "director" : "Gore Verbinski", "year" : 2006 , "cast":["Johnny Depp","Orlando Bloom","Keira Knightley"]},
{ "title" : "The Lord of the Rings: The two towers", "director" : "Tim Burton", "year" : 2005 , "cast":["Orlando Bloom","Elijah Wood","Ian McKellen"]},
{ "title" : "Xmen Days of Future past", "director" : "Brian Singer", "year" : 2014 , "cast":["Ian McKellen","Hugh Jackman"]}]
);

db.Movies.find({}).pretty();
db.Movies.find({"director":"Tim Burton"}).pretty();
db.Movies.find({"cast":{$in: ["Ian McKellen"] }}).pretty();
db.Movies.find({"year":{$gte: 2013}}).pretty();
db.Movies.find({"year":{$gte: 1990, $lte: 1999}}).pretty();
db.Movies.find({"year":{$gte: 2000, $lte: 2010}}).pretty();
db.Movies.update( {"title":"Assassins Creed"}, {$set: {"cast":["Michael Fassbender","Marion Cotillard"]} } );
db.Movies.update( {"title":"Deadpool"}, {$set: {"synopsis":"Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead (Brianna Hildebrand), Deadpool uses his new skills to hunt down the man who nearly destroyed his life."} } );
db.Movies.update( {"title":"Sin City"}, {$addToSet: {"cast":"Tim Owen"} } );

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

db.Movies.find({"Based on":"videogame"}).pretty();
db.Movies.find({"Based on":"comic"}).pretty();

db.createCollection("Data");
db.Data.insertMany([{name:"Shelcy", surname:"Calderon", age:"17", interests: ["fly","gym","music"],languages: ["javascript"]},
{name:"Daniel", surname:"Jimenez", age:"21", interests: ["programming","films","dance","gym"],languages: ["php","python","c#","java","javascript"]},
{name:"Jose", surname:"Orellana", age:"33", interests: ["beer","read","study","videogames"],languages: ["visual basic" , "javascript", "php","java","c#","python"]},
{name:"Kamilo", surname:"Munevar", age:"28", interests: ["beer","videogames","music","women"],languages: ["java","php","javascript","unity","c++"]},
{name:"Nicolas", surname:"Zarate", age:"20", interests: ["systems","sports","technology"],languages: ["javascript","python"]}])