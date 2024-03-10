import { useState,useEffect} from "react"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './index.css'

export function Header() 
{
    // 2 details(variable name, function name)

   const [ itemName, setItemName ] = useState("")

   const [ itemCount, setItemCount ] = useState(1)

   const [ totalData, setTotalData ] = useState([])
   const [ databaseData, setDatabaseData ] = useState([])
   
//    totalData = ["2 Bag", "4 Shoe"]


    // useEffect(function()
    // {

    //     database.collection("tripcollection").onSnapshot(function(mysnapshot)
    //     {
            
    //          setDatabaseData(mysnapshot.docs.map(function(i)
    //          {
    //              return i.data().itemdata
    //          }))
    //     })

    // },[])

    function collectData(event)
    {
        setItemName(event.target.value)
    }

    function collectItemCount(event)
    {
        setItemCount(event.target.value)
    }

    // function addItem()
    // {
    //     // Logic to display itemCount along with itemName
    //     database.collection("tripapp").add(
    //       {
    //         itemdata: itemCount +" "+ itemName
    //       }
    //     )
        
    //     // Logic to clear the data
    //     setItemCount(1)
    //     setItemName("")

    //     // itemCount = 0
    //     // itemName = "Bags"


    // }

    function collect()
    {
      const newItem = {
        itemName: itemName,
        itemCount: itemCount
    };
    setTotalData([...totalData, newItem]);
    setItemCount(1);
    setItemName('');
    }

    function deleteItem(info,index)
    {
          

      setTotalData(totalData.filter(function(i)
      {
                
          if(i != info)
          {
              return i
          }
           

      }))
            

           
            
            // setTotalData(...totalData , info = '')
    }


  return (

  <div className="Main">
                  
            <h1 className="additems" style={{color:"black"}}>Add your List of Items below</h1>
                  <div className="box">
      

      <div className="three">

      <select id="select" onChange={collectItemCount} value={itemCount}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    
     
      <input id="inputbox" type="text" value={itemName} placeholder="Enter the item name...." onChange={collectData} style={{width:'500px'}}/>
      

     
      <button id="add"  style={{marginLeft:"10px" , fontSize:30}} class="btn btn-success" onClick={collect}><text id="additem">Add Item</text></button>
     



      </div>

     { 
        totalData.map(function(item,index)
        {
            return(
                    
              <div className="output">

<h3 id="finaldata">{item.itemCount} {item.itemName} <FontAwesomeIcon id="finalicon" icon={faTrash} onClick={function()
{
  deleteItem(item,index)
}}/></h3>


                </div>
                       

                             
               )
        })

       
    }

    </div>

    {console.log(totalData)}

  </div>
    
  )
}


