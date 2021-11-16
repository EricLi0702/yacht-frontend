import axios from "axios";

function getYachtList() {
  return axios.get("/api/owner/yacht");
}
function createYacht(payload) {
  return axios.post("/api/owner/yacht", payload);
}
function updateYacht(payload) {
  return axios.put("/api/owner/yacht", payload);
}
function deleteYacht(payload) {
  return axios.delete("/api/owner/yacht", { data: payload });
}

export { getYachtList, createYacht, updateYacht, deleteYacht };
