import customFetch from "../utils/customFetch";

const getCountDocs = async () => {
  const res = await customFetch("/admin-stats/count-all-docs");
  const data = res.data;

  return data;
};

export const apiAdmin = { getCountDocs };
