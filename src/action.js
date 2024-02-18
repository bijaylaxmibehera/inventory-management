import axios from "axios";

export const fetchAllItems=()=>async(dispatch)=>{
    try{
      const response=await axios.get("https://3d01f58c-d776-4d4a-89ac-9d9a39afc19a-00-2rbr98vgvfaoi.pike.replit.dev/api/v1/items");

      dispatch({type:"FETCH_ALL_ITEMS", payload:response.data});
    }catch(error){
        console.error("Error in fetching items:",error);
    }
}



export const addItem=(newItem)=>async(dispatch)=>{
    try{
      const response=await axios.post("https://3d01f58c-d776-4d4a-89ac-9d9a39afc19a-00-2rbr98vgvfaoi.pike.replit.dev/api/v1/items",newItem);

      dispatch({type:"ADD_ITEM", payload:response.data});
    }catch(error){
        console.error("Error in adding item.")
    }
}

export const updateItem=({itemId,updatedItem})=>async(dispatch)=>{
    try{
      const response=await axios.post(`https://3d01f58c-d776-4d4a-89ac-9d9a39afc19a-00-2rbr98vgvfaoi.pike.replit.dev/api/v1/items/${itemId}`,updatedItem);

      dispatch({type:"UPDATE_ITEM", payload:response.data});
    }catch(error){
        console.error("Error in update item");
    }
}

export const deleteItem=(itemId)=>async(dispatch)=>{
    try {
        const response=await axios.delete(`https://3d01f58c-d776-4d4a-89ac-9d9a39afc19a-00-2rbr98vgvfaoi.pike.replit.dev/api/v1/items/${itemId}`);

        dispatch({type:'DELETE_ITEM',payload:response.data})
    } catch (error) {
        console.log("Error in delete item")
    }
}

export const fetchAllSales=()=>async(dispatch)=>{
    try{
      const response=await axios.get("https://3d01f58c-d776-4d4a-89ac-9d9a39afc19a-00-2rbr98vgvfaoi.pike.replit.dev/api/v1/sales");
 
      dispatch({type:"FETCH_ALL_SALES", payload:response.data})
    }catch(error){
     console.error("Error in  fetching sales");
    }
 }

 export const addSale=(itemId,quantity,price)=>async(dispatch)=>{
    try{
       const response=await axios.post(`https://3d01f58c-d776-4d4a-89ac-9d9a39afc19a-00-2rbr98vgvfaoi.pike.replit.dev/api/v1/sales/${itemId}`,{quantity,price});

       dispatch({type:"ADD_SALE", payload:response.data})
    }catch(error){
        console.error("Error in add sale");
    }
 }