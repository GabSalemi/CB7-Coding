export const createElement = (element, class_name, content_text) => {
    let elem = document.createElement(element)
  elem.className = class_name
  elem.textContent = content_text

  return elem
    
}





export const getWeather = async (city) => {

	const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a7ba0b0129msha2ee89255971671p1a6bfbjsn2156c900afe8',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }})

        const data = res.json()
        
	
        return data

    }

    export const getflag = async (countryCode) => {

        const flagRes = await fetch(`https://flagcdn.com/${countryCode}/codes.json`);

        const dataFlag = flagRes.json()

        return dataFlag
    
        }



