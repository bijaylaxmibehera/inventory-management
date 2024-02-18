import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, fetchAllItems } from "../action";
import { Link } from "react-router-dom";

export const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  return (
    <>
      <h1>Items page</h1>
      {items ? (
        <ol>
          {items.map((item) => {
            return (
              <li key={item._id}>
                <p>Name:{item.name}</p>
                <p>Quantity:{item.quantity}</p>
                <p>Price: ${item.price}</p>
                <p>Category:{item.category}</p>
                <Link to={`/items/edit/${item._id}`} state={item}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => dispatch(deleteItem(item._id))}>
                  Delete
                </button>
                <hr/>
              </li>
            );
          })}
        </ol>
      ) : (
        <p>Items not found!</p>
      )}
      <Link to="/items/add">
        <button>Add Item</button>
      </Link>
    </>
  );
};
