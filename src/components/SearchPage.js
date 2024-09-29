import { useParams } from "react-router-dom";
import { SearchProduct } from "../utils/SearchProduct";
import Data from "../utils/PUMA.json";
import { useEffect, useState } from "react";
import AllProducts from "./AllProducts";

const SearchPage = () => {
  const [data] = useState(
    Data.item?.props?.pageProps?.initialData?.searchResult?.itemStacks[0]?.items
  );

  const [FilterItem, setFilterItem] = useState();

  const { input } = useParams();
  
  useEffect(() => {
    setFilterItem(SearchProduct(input, data));
  }, [input]);

  return (
    <div className="w-full h-fit">
      <AllProducts data={FilterItem} />
    </div>
  );
};

export default SearchPage;
