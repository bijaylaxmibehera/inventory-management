import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSales } from "../action";

export const Sales = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales.sales);

  useEffect(() => {
    dispatch(fetchAllSales());
  }, [dispatch]);
  console.log(sales);
  return (
    <>
      <h1>Sales page</h1>
      {sales ? (
        <>
          {" "}
          <ol>
            {sales.map((sale) => {
              return (
                <li key={sale._id}>
                  <p>Item name:{sale.description.name}</p>
                  <p>Quantity:{sale.quantity}</p>
                  <p>Price:{sale.price}</p>
                </li>
              );
            })}
          </ol>
        </>
      ) : (
        <p>No sale found!</p>
      )}
    </>
  );
};
