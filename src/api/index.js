import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`

  try {
    const { data: { data } } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'f395e223cdmsh16d692f2f369c97p145623jsn2e0d2fe2126f'
      }
    });

    return data;
  } catch (error) {
    console.log(error)
  }
}