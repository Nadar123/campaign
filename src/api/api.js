import axios from "axios";

async function getData() {
  const KEY = "9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9";
  return await axios.get(`/default/VisualizatorApi`, {
    headers: { "x-api-key": KEY }
  });
}

export { getData };
