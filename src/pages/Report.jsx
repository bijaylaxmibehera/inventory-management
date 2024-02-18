import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems, fetchAllSales } from "../action";

export const Report = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const sales = useSelector((state) => state.sales.sales);

  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchAllSales());
  }, [dispatch]);

  const totalItemSold = sales
    ? sales.reduce((acc, curr) => acc + curr.quantity, 0)
    : 0;
  const totalItems = items
    ? items.reduce((acc, curr) => acc + curr.quantity, 0)
    : 0;
  const totalItemAvailable = totalItems - totalItemSold;

  return (
    <>
      <h1>Report page</h1>
      <p>Total Items sold: {totalItemSold}</p>
      <p>Total Items Available: {totalItemAvailable}</p>
    </>
  );
};
