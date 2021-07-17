MongoDB alapfeladatok terminálban (Mongo shell-ben)

Elsőként olvasd végig az összes pontot!

1. Készíts egy videoStore nevű MongoDB adatbázist!
```
use videoStore
```
---
2. Hozz létre benne egy movies listát!
```
db.movies.find()
```
---
3. Ments el benne 10 új filmet (save()) a következő mezőkkel:
_id: legyen generált, ObjectId
title: egy-egy kedvenc film címe, szöveges tartalom
category: szöveges tartalom (3 típus lehet: fantasy, action, romantic) => legyenek vegyesen a filmek, amennyire lehet
director: szöveges tartalom, 3 rendező közül vegyesen szétválogatva => Steven Spielberg, Clint Eastwood, James Cameron
```
db.movies.save([
... {title: "Jurassic Park", category: "fantasy", director: "Steven Spielberg"},
... {title: "E.T. földönkívüli", category: "fantasy", director:"Steven Spielberg"},
... {title: "Az elveszett frigyláda fosztogatói", category: "action", director: "Steven Spielberg"},
... {title: "Elcserélt ételek", category: "romatic", director: "Clint Eastwood" },
... {title: "A zöldfölű", category: "action", director: "Clint Eastwood" },
... {title: "Nincs bocsánat", category: "action", director: "Clint Eastwood" },
... {title: "Avatar", category: "fantasy", director: "James Cameron" },
... {title: "Titanic", category: "romantic", director: "James Cameron" },
... {title: "Terminátor - A halálosztó", category: "action", director: "James Cameron" },
... {title: "Indiana Jones", category: "action", director: "Steven Spielberg" }
... ])

```
---
4. Frissítsd a listádat (updateMany), mindenki kapjon egy „ratings” mezőt, amely egy üres listát tartalmaz (1-5 ig lehet benne tárolni a szavazatokat)!
```
 db.movies.updateMany({},
... {$set: {rating:[]}})
```
---
5. Adj 3 különböző filmre legalább 2 különböző szavazatot (használd a $push operátort)!
```
db.movies.updateOne({title: "Jurassic Park"}, {$push:{ratings: [2,3]}}),
db.movies.updateOne( {title: "Avatar"}, {$push:{ratings: [3,5]}}),
db.movies.updateOne( {title: "Titanic"}, {$push:{ratings: [4,5]}})
```
---
6. Adj hozzá minden filmhez egy „releaseYear” (megjelenés éve) mezőt: kezdetnek állíts be egy tetszőleges évet minden filmnek (pl.: 2000)!
```
 db.movies.updateMany({}, {$set: {releaseYear: 2000}})
```
---
7. Írd át category típusonként csupa nagybetűre a kategóriákat (pl.: action ==> ACTION legyen mindenhol). Használd az updateMany parancsot!
```
db.movies.updateMany( {}, [{$set: {category: {$toUpper: "$category"} }}] )
```

##Végeredmény: 
