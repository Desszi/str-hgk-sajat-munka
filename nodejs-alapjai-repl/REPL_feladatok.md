**1. feladat:**
*Ellenőrizd a telepített NodeJS verziószámát!*

A telepített NodeJS verziószámát az ```node -v``` paranccsal kérhetjük le.
Nálam használt NodeJS verziószáma: v14.16.0

**2. feladat:**
*Ellenőrizd a telepített npm verziószámát!*

A NodeJS csomagkezelőjének verziószámát az ```npm -v``` paranccsal deríthetjük ki.
A nálam telepített npm verziószáma: 6.14.11

**3. feladat:**
*Listázd ki a projekted függőségeit! Csak az első szint kell, a telepített csomagok függőségei nem!*

A projekt függőségeinek lekérdezéséhez előbb egy új NodeJS projektet kell létrehozni, amit az ```npm init --yes``` paranccsal érhetünk el. A telepítetett csomagok függőségeit az ```npm i``` -vel adhatjuk hozzá a projekthez, viszont erre most nem lesz szükség. A parancs hatására létrejött egy package.json fájl,ez az ami tartalmazza a projektünk függőségeit, az init után ez automatikusan listázásra is kerül. A konzolon való listázáshoz a ```npm list --depth=0``` parancs használatos.

**4. feladat:**
*Írasd ki a konzolra az eslint csomag adatait!*

Hasonlóan a 3. feladathoz, itt azonban az ```npx eslint --init``` parancsot kell kiadni és a felmerülő kérdésekre feleletválasztós formában válaszolni. Létrejön egy .eslintrc.json konfigurációs állomány, ami tartalmazza az eslint csomag adatait. A konzolra az ```npm view eslint```-tel tudjuk megnézni.

**5. feladat:**
*Kérdezd le az projekted elavult csomagjait, és ha van találat, frissítsd őket!*

A függőségek frissítéséhez az ```npm i``` parancsot használjuk. Ha elavult csomagokról akarunk tájékozódni azt a ```npm outdated``` paranccsal tehetjük meg.
