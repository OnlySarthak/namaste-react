getLatLng = async(para)=>{
    const url = `https://nominatim.openstreetmap.org/search?city=${para}&format=json`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
        return { lat: data[0].lat, lng: data[0].lon };
    } else {
        return null;
    }
}

export default getLatLng;