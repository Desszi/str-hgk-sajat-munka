# Listák közötti kapcsolatok, aggregáció gyakorlása, Embed vs. Referencing

## Ha egy objektum (dokumentum) egy másik dokumentum egyik mezőjében van, akkor beszélhetünk „embed”, beágyazott dokumentumról.

Használjuk a videoStore adatbázist!
```
use videoStore
```

Hozzunk létre benne egy új „cinemas” listát, amely a következő kikötésekkel rendelkezik:

- _id: kötelező megadni és csak egész számokból (integer) állhat
- 'name' mező: string lehet, kötelező megadni. Csak számokból, betűkből (angol) és szóközből állhat
- 'movies' mező: 'array' lehet és kötelező megadni
- 'address' mező: objektum lehet és kötelező megadni (az objektumban majd elég egy „city” mezővel játszani)
```
 db.createCollection("cinema", {
... ... validator: {
... ...         $jsonSchema: {
... ...               required: ["id", "name", "movies", "address"],
... ...               properties: {
... ...                          _id: {bsonType: "int"},
... ...                         name: {bsonType: "string", pattern: "[a-zA-Z0-9].*"},
... ...                        movies: {bsonType: "array"},
... ...                       address: {bsonType: "object", properties: {city: {bsonType: "string"}}}
...                 }
...             }
...     }
... })
```

1. Ha még nem tettük meg, a cinema listánk rendelkezzen 3 cinema dokumentummal, és minden cinema dokumentum „játsszon” legalább 3 különböző filmet => adjunk hozzá legalább 3 cinema dokumentum egyes movies listájához 3 db "_id" értéket a movies listából!
```
db.cinemas.save([
... {_id: 1, name: "Arena Plaza", movies[], address: {city: "Budapest"}},
... {_id: 2, name: "Westend Cinema City", movies[], address: {city: "Budapest"}},
... {_id: 3, name: "Sugar mozi", movies[], address: {city: "Budapest"}}
... ])
```

2. Kérdezzük le, hogy az első helyen lévő mozink milyen filmeket játszik, jelenjen meg minden film tulajdonsága!

```
db.cinemas.aggregate([
... {
...   $lookup: {
...   from: "movies",
...      localField: "movies",
...      foreignField: "_id",
...      as: "movies"
...    }
...  }, { $limit: 1 }
... ])
```
3. Ismételjük meg a fenti lekérdezést úgy, hogy csak a játszott film listája, adatai jelenjenek meg (tipp: „project” operator)!

```
db.cinemas.aggregate([
... {
...   $lookup: {
...   from: "movies",
...      localField: "movies",
...      foreignField: "_id",
...      as: "movies"
...    }
...  }, { $limit: 1 }, 
...  {$project: { _id: 0, movies: 1 }}
... ])
```
4. Ha még nem tettük meg, készítsünk el a videoStore-ban egy directors listát (a 2. feladat leírása alapján), és minden rendezőhöz rendeljünk 2-3 db filmet a „movies” mezőjükhöz.

5. Kérdezzük le az egyik rendező által rendezett filmek adatait!
6. Kérdezzük le egy másik rendező filmjeit úgy, hogy csak a rendező neve és a filmek „title”-jei, vagyis címei jelennek meg (tipp: $project operátor)!
A képen szöveg látható  Automatikusan generált leírás

7. Adj pár szavazatot egy-egy filmre ("ratings"), ha még nem tetted meg. Írj egy lekérdezést az aggregáció segítségével, amely visszaadja annak a filmnek a címét, amely a legjobb átlagszavazattal rendelkezik! Két mezőt adjon vissza: "title" és egy új mező: "rateAvg" => pl.: { "title" : "E.T.", "rateAvg" : 4.5 }. Csak aggregációt használj, Cursor metódusok használata nélkül!