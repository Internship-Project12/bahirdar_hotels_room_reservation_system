const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
}

export default formatDate;