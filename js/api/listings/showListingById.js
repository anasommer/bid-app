import getListingId from "../../helpers/getListingId.js";
import { BASE_URL } from "../constants.js";
import createHtml from "../../ui/common/createHtml.js";


const token = localStorage.getItem("accessToken");

/**
 * Fetches and displays a post by its ID.
 *
 * @returns {void}
 */
export async function showPostById() {
  const id = getListingId();

  const endpoint = "
  /auction/listings/";
  const method = "GET";
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  
  console.log(id)

  // here goes the function that will make a call to the API
}

showPostById();
