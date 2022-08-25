# Fetch the ISS API Data with JS

![](assets/images/colorful-wall_sm_tra.png)

@author Toni Zeidler
@since  2022-08-25

<hr>

## Intro 

The scientists are funny people. They trying to flatten the earth again? 
<a href="https://youtu.be/kIID5FDi2JQ" target="">Why all world maps are wrong?</a>   http://metrocosm.com/mercator/    
http://thetruesize.com/             


## Setup
For later development of the project I initialize Node App, but it was not used in this project.

```bash
npm i
```

## Rest API for this App

https://wheretheiss.at/

https://wheretheiss.at/w/developer

## Other sources & Space Data Standarts

https://spacedatastandards.org/#/Standards

http://celestrak.org/satcat/search.php -> name = iss

SCN for ISS -> http://celestrak.org/NORAD/elements/gp.php?CATNR=25544&FORMAT=KVN

```
ISS (ZARYA)             
1 25544U 98067A   22237.36915490 -.00259173  00000+0 -47121-2 0  9998
2 25544  51.6403 353.8478 0003123 168.6722 230.6017 15.49832154355914
```

https://de.wikipedia.org/wiki/Satellite_Catalog_Number

https://nssdc.gsfc.nasa.gov/nmc/SpacecraftQuery.jsp

http://celestrak.org/NORAD/documentation/gp-data-formats.php

http://celestrak.org/NORAD/elements/gp.php?{QUERY}=VALUE[&FORMAT=VALUE]




## Other Web APIs

https://covid19api.com/

Search for Web APIs here.
https://apis.guru/



## Development Steps

```bash
npm init -y

npm i leaflet --save

npm i bootstrap@5.2.0 --save
```


## Glossary
##### A
API = Application Programming Interface <a href="https://de.wikipedia.org/wiki/Programmierschnittstelle" target="_blank">Wikipedia DE</a>

##### I
ISS = International Space Station <a href="https://de.wikipedia.org/wiki/Internationale_Raumstation
" target="_blank">Wikipedia DE</a>
##### J
JS = JavaScript <a href="https://de.wikipedia.org/wiki/JavaScript" target="_blank">Wikipedia DE</a>

##### L
<a href="https://leafletjs.com/" target="_blank">Leaflet</a> = an open-source JavaScript library
for mobile-friendly interactive maps [<a href="https://de.wikipedia.org/wiki/Leaflet" target="_blank">Wikipedia DE</a>], [<a href="https://leafletjs.com/reference.html" target="_blank">Docs</a>]

##### R
REST = Representational State Transfer <a href="https://de.wikipedia.org/wiki/Representational_State_Transfer" target="_blank">Wikipedia DE</a> or data in the well-state for representation

##### S
SCN = Satellite Catalog Number

##### U
URL = Uniform Resource Locator <a href="https://de.wikipedia.org/wiki/Uniform_Resource_Locator" target="_blank">Wikipedia DE</a>

URI = Uniform Resource Identifier <a href="https://de.wikipedia.org/wiki/Uniform_Resource_Identifier" target="_blank">Wikipedia DE</a>