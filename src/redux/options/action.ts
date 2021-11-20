import { GET_OPTION } from "./constant";
import axios from "axios";
import baseUrl from "../../configs/api/endpoint";

export const getOption = (keyword: string) => async (dispatch: any) => {
  dispatch({
    type: GET_OPTION.loading,
  });
  try {
    const res = await axios.get(`${baseUrl}s=${keyword}`);
    console.log(res?.data?.Search);
    const data = res?.data?.Search.map((item: any) => {
      return {
        value: item.Title,
        label: item.Title,
      };
    });
    dispatch({
      type: GET_OPTION.success,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
