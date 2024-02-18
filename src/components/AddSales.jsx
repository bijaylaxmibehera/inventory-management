import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSale, fetchAllItems } from "../action";

export const AddSale = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const initialSaleState = {
    itemName: items ? items[0]?.name : "",
    itemId: items ? items[0]?._id : "",
    quantity: items ? items[0].quantity : 1,
    price: items ? items[0].price : 0,
  };

  const [saleData, setSaleData] = useState(initialSaleState);

  useEffect(() => {
    dispatch(fetchAllItems());
    if (items) {
      setSaleData({
        itemName: items[0]?.name,
        itemId: items[0]?._id,
        quantity: 1,
        price: 0,
      });
    }
  }, [dispatch,items]);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addSale(
        saleData.itemId,
        saleData.quantity,
        saleData.price
      )
    );
    setSaleData(initialSaleState);
  };

  console.log(saleData);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Sale Item:</label>
          <select
            required
            onChange={(e) => {
              const [_id, name] = e.target.value.split(",");
              setSaleData({ ...saleData, itemName: name, itemId: _id });
            }}
          >
            {items ? (
              <>
                {items.map(({ _id, name }) => (
                  <option value={`${_id},${name}`} key={_id}>
                    {name}
                  </option>
                ))}
              </>
            ) : (
              <p>No items found!</p>
            )}
          </select>
        </div>
        <div>
          <label>Sale quantity:</label>
          <input
            type="number"
            value={saleData.quantity}
            onChange={(e) =>
              setSaleData({ ...saleData, quantity: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Sale price:</label>
          <input
            type="number"
            value={saleData.price}
            onChange={(e) =>
              setSaleData({ ...saleData, price: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Add Sale</button>
      </form>
    </>
  );
};
