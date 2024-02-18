import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../action";
import { useLocation, useNavigate } from "react-router";

export const AddItem = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate=useNavigate();
  const item = location.state ? location.state : null;
  const initialState = {
    name: item ? item.name : "",
    quantity: item ? item.quantity : 0,
    price: item ? item.price : 0,
    category: item ? item.category : "Food",
  };
  const [itemData, setItemData] = useState(initialState);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(item){
        dispatch(updateItem({itemId:item._id,updatedItem:itemData}));
        navigate("/items")
    }else{
        dispatch(addItem(itemData));
        setItemData(initialState);
        navigate("/items")
    }
  }
  return (
    <>
      <h3>{item?"Update":"Add New"} Item</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={itemData.name}
            required
            onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={itemData.quantity}
            required
            onChange={(e) =>
              setItemData({ ...itemData, quantity: e.target.value })
            }
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={itemData.price}
            required
            onChange={(e) =>
              setItemData({ ...itemData, price: e.target.value })
            }
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={itemData.category}
            onChange={(e) =>
              setItemData({ ...itemData, category: e.target.value })
            }
            required
          >
            <option value="Electronics">Electronics</option>
            <option value="Stationary">Stationary</option>
            <option value="Food">Food</option>
            <option value="Furniture">Furniture</option>
            <option value="Sports">Sports</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
        </div>
        <button type="submit">{item?"Update":"Add"}</button>
      </form>
    </>
  );
};
