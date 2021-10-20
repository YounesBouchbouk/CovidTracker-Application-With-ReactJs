import axios from 'axios'

const urlapi = 'https://covid19.mathdro.id/api'

export const fetchdata = async (selectedcountry) =>{

    try {

        let urltofellow = urlapi

        if(selectedcountry != ""){
            urltofellow = `${urlapi}/countries/${selectedcountry}`
        } 

        let {data : {confirmed , recovered , deaths , lastUpdate}} = await  axios.get(`${urltofellow}`)
        

        console.log(urltofellow);
        const modifieddata={
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifieddata;
        
    } catch (error) {
        return error;
    }

}
export const dailydata = async () =>{
    try{
        let newapid = `${urlapi}/daily`
        let {data } = await axios.get(`${newapid}`)


        let modifieddt = data.map((item) => ({
                confirmed : item.confirmed.total,
                deaths : item.deaths.total,
                date : item.reportDate,
        }));

        return modifieddt;


    }catch(error){
        return error;
    }


}

export const  fetchcountrydata = async () =>{
    
    try {
        let {data : {countries}} = await axios.get(`${urlapi}/countries`)

        const newdata = countries.map((item) => item.name)

        // console.log(newdata);
        return newdata    
    } catch (error) {
        return error
    }
}