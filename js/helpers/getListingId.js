export default function getListingId() {
  const queryString = document.location.search;
  const parameter = new URLSearchParams(queryString);
  const id = parameter.get('id');

  return id;
}
