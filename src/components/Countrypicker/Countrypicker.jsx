import {React , useState , useEffect} from 'react'
import {fetchcountrydata} from '../api/index'
import {InputLabel ,NativeSelect } from '@material-ui/core'
const Countrypicker = (props) =>{

    const [countryliste , setcountrylise] = useState([])



    useEffect(()=>{
        const fetchcnt = async () =>{
            let my = await fetchcountrydata()
            setcountrylise(my)
           
        }
        console.log(countryliste);
        fetchcnt()
    } , [])

  
    
    return (
        <div>
           <InputLabel htmlFor="select">Country</InputLabel>
                <NativeSelect id="select" defaultValue="" onChange={(e) =>{props.onchangecountry(e.target.value)}}>
                      <option value="">Global</option>
                      {countryliste.map((item)=> {return(<option key={item} value={item}>{item}</option>)})}
                </NativeSelect>
        </div>
    )
}

export default Countrypicker