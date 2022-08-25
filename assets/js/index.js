

        let myIcon = L.icon({
            iconUrl: 'assets/images/International_Space_Station.svg',
            iconSize: [126, 200],
            iconAnchor: [63, 100]
        })

        

        // 1 - no zoom 
        // [0,0] - start
        const myMap = L.map('issMap').setView([0, 0], 4)
        
        const marker = L.marker([0, 0], {icon: myIcon}).addTo(myMap)

        const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

        const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        const tiles = L.tileLayer( tileUrl, { 
            maxZoom: 19,
            attribution: attribution 
        })

        tiles.addTo(myMap)

        async function getISS() {
            const response = await fetch (api_url) 
            const data = await response.json()

            // extract properties from data
            const { latitude, longitude } = data

            marker.setLatLng([latitude, longitude])
            myMap.setView([latitude, longitude], 4)

            document.getElementById('lat').textContent = latitude.toFixed(2)
            document.getElementById('lon').textContent = longitude.toFixed(2)

            // console.dir(data);
            // console.dir(data.latitude);
            // console.dir(data.longitude);
        }
        
        getISS()


        setInterval( getISS, 1000 )