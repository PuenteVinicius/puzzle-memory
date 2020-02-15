import axios, { AxiosResponse } from "axios";

import Card from "./card.interface";
import { Constants } from "@/constants";

export default class CardService {
  public static getAllCards(): Promise<AxiosResponse<Card[]>> {
    return axios
      .get(Constants.CARDS_FILE_PATH)
      .then((data: AxiosResponse<Card[]>) => data);
  }
}
