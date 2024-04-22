import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store/slices/dataSlice";
import { menu, productDetails } from "../data/menuData";

// logic for App loading
export function AppInitializationGuard({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData({ menu, productDetails }));
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return null;
  }

  return children; // <App />
}

// can show skeleton or spinner while loading
