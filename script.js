// Google Maps API初始化
function initMaps() {
    // 创建京都中心地图
    const kyotoCenter = { lat: 35.0116, lng: 135.7681 };
    const overviewMap = new google.maps.Map(document.getElementById("overviewMap"), {
        zoom: 11,
        center: kyotoCenter,
    });
    
    // 日程1地图：广州-东京-京都
    const day1Map = new google.maps.Map(document.getElementById("day1Map"), {
        zoom: 5,
        center: { lat: 33.5, lng: 135.0 },
    });
    
    // 添加广州-东京-京都航线
    const day1Path = [
        { lat: 23.1291, lng: 113.2644 }, // 广州
        { lat: 35.6762, lng: 139.6503 }, // 东京
        { lat: 35.0116, lng: 135.7681 }  // 京都
    ];
    
    const day1Route = new google.maps.Polyline({
        path: day1Path,
        geodesic: true,
        strokeColor: "#e98074",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    
    day1Route.setMap(day1Map);
    
    // 添加标记
    addMarker(day1Map, day1Path[0], "广州");
    addMarker(day1Map, day1Path[1], "东京");
    addMarker(day1Map, day1Path[2], "京都");
    
    // 日程2地图：三千院→贵船神社→鸭川
    const day2Map = new google.maps.Map(document.getElementById("day2Map"), {
        zoom: 12,
        center: kyotoCenter,
    });
    
    // 京都第二天景点位置
    const day2Locations = [
        { lat: 35.1168, lng: 135.8336, title: "三千院" },
        { lat: 35.1218, lng: 135.7634, title: "贵船神社" },
        { lat: 35.0116, lng: 135.7681, title: "鸭川" }
    ];
    
    // 添加第二天景点标记
    day2Locations.forEach(location => {
        addMarker(day2Map, location, location.title);
    });
    
    // 连接第二天路线
    const day2Route = new google.maps.Polyline({
        path: day2Locations,
        geodesic: true,
        strokeColor: "#e98074",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    
    day2Route.setMap(day2Map);
    
    // 日程3地图：岚山区域
    const day3Map = new google.maps.Map(document.getElementById("day3Map"), {
        zoom: 14,
        center: { lat: 35.0094, lng: 135.6747 }, // 岚山中心
    });
    
    // 岚山地区景点位置
    const day3Locations = [
        { lat: 35.0194, lng: 135.6665, title: "嵯峨站" },
        { lat: 35.0169, lng: 135.6767, title: "岚山小火车" },
        { lat: 35.0209, lng: 135.6665, title: "保津川游船" },
        { lat: 35.0137, lng: 135.6745, title: "渡月桥" },
        { lat: 35.0095, lng: 135.6716, title: "常寂光寺" },
        { lat: 35.0169, lng: 135.6731, title: "竹林小径" },
        { lat: 35.0161, lng: 135.6741, title: "天龙寺" },
        { lat: 35.0126, lng: 135.6756, title: "Rocking Chair酒吧" }
    ];
    
    // 添加岚山景点标记
    day3Locations.forEach(location => {
        addMarker(day3Map, location, location.title);
    });
    
    // 连接岚山路线
    const day3Route = new google.maps.Polyline({
        path: day3Locations,
        geodesic: true,
        strokeColor: "#e98074",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    
    day3Route.setMap(day3Map);
    
    // 日程4地图：背割堤→清水寺/永观堂→八坂神社→东京
    const day4Map = new google.maps.Map(document.getElementById("day4Map"), {
        zoom: 12,
        center: kyotoCenter,
    });
    
    // 第四天景点位置
    const day4Locations = [
        { lat: 34.8824, lng: 135.6768, title: "背割堤" },
        { lat: 34.9946, lng: 135.7850, title: "清水寺" },
        { lat: 34.9955, lng: 135.7841, title: "二三年坂" },
        { lat: 35.0139, lng: 135.7943, title: "永观堂" },
        { lat: 35.0125, lng: 135.7943, title: "南禅寺" },
        { lat: 35.0062, lng: 135.7816, title: "八坂神社" },
        { lat: 34.9858, lng: 135.7589, title: "京都站" },
        { lat: 35.6282, lng: 139.7384, title: "品川站" }
    ];
    
    // 添加第四天景点标记
    day4Locations.forEach(location => {
        addMarker(day4Map, location, location.title);
    });
    
    // 连接京都内路线（不包括到东京的路线）
    const day4KyotoRoute = new google.maps.Polyline({
        path: day4Locations.slice(0, 7),
        geodesic: true,
        strokeColor: "#e98074",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    
    day4KyotoRoute.setMap(day4Map);
    
    // 添加京都到东京路线
    const kyotoToTokyoPath = [
        day4Locations[6], // 京都站
        day4Locations[7]  // 品川站
    ];
    
    const kyotoToTokyoRoute = new google.maps.Polyline({
        path: kyotoToTokyoPath,
        geodesic: true,
        strokeColor: "#e85a4f",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    
    kyotoToTokyoRoute.setMap(day4Map);
    
    // 日程5地图：东京→广州
    const day5Map = new google.maps.Map(document.getElementById("day5Map"), {
        zoom: 5,
        center: { lat: 33.5, lng: 135.0 },
    });
    
    // 添加东京-广州航线
    const day5Path = [
        { lat: 35.6762, lng: 139.6503 }, // 东京
        { lat: 23.1291, lng: 113.2644 }  // 广州
    ];
    
    const day5Route = new google.maps.Polyline({
        path: day5Path,
        geodesic: true,
        strokeColor: "#e98074",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    
    day5Route.setMap(day5Map);
    
    // 添加标记
    addMarker(day5Map, day5Path[0], "东京");
    addMarker(day5Map, day5Path[1], "广州");
    
    // 为景点列表添加点击事件
    addPlacesListEvents(day2Map, document.querySelectorAll(".day:nth-child(2) .places-list li"));
    addPlacesListEvents(day3Map, document.querySelectorAll(".day:nth-child(3) .places-list li"));
    addPlacesListEvents(day4Map, document.querySelectorAll(".day:nth-child(4) .places-list li"));
    
    // 添加总览地图上的所有地点
    const allKyotoLocations = [
        ...day2Locations,
        ...day3Locations,
        ...day4Locations.slice(0, 7)
    ];
    
    // 在总览地图上添加所有京都景点
    allKyotoLocations.forEach(location => {
        addMarker(overviewMap, location, location.title);
    });
}

// 添加地图标记
function addMarker(map, position, title) {
    const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: title,
        animation: google.maps.Animation.DROP
    });
    
    const infoWindow = new google.maps.InfoWindow({
        content: `<div style="font-weight:bold">${title}</div>`
    });
    
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
    
    return marker;
}

// 为景点列表添加点击事件
function addPlacesListEvents(map, placeItems) {
    const service = new google.maps.places.PlacesService(map);
    
    placeItems.forEach(item => {
        item.addEventListener("click", () => {
            const place = item.getAttribute("data-place");
            
            const request = {
                query: place,
                fields: ["name", "geometry"]
            };
            
            service.findPlaceFromQuery(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    const location = results[0].geometry.location;
                    map.setCenter(location);
                    map.setZoom(15);
                    
                    const marker = new google.maps.Marker({
                        position: location,
                        map: map,
                        title: results[0].name,
                        animation: google.maps.Animation.DROP
                    });
                    
                    const infoWindow = new google.maps.InfoWindow({
                        content: `<div style="font-weight:bold">${results[0].name}</div>`
                    });
                    
                    infoWindow.open(map, marker);
                }
            });
        });
    });
} 