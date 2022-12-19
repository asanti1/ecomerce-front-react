import { mobilierApi } from "../../api/mobilierAPI";
import { setFurnitures, startLoadingFurnitures } from "./furnitureSlice";

export const getFurnitures = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingFurnitures());

    const { data } = await mobilierApi.get(`/furnitures`);

    dispatch(setFurnitures({ furnitures: data }));
  };
};
