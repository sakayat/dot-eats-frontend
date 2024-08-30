import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import SliderContent from "./SliderContent";
import { useFoodItemsStore } from "../lib/store/zustandStore";

const HomeChefsFoodItem = () => {

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const { data, fetchFoodItems } = useFoodItemsStore();

  return (
    <div className="pt-14 relative">
      <div className="xl:container m-auto px-8">
        <SectionTitle title={"HomeChefs"} sliderId="homechefs" tag="homechefs" />
        <SliderContent data={data} tag_name="homechefs" sliderId="homechefs" />
      </div>
    </div>
  )
}

export default HomeChefsFoodItem