function filterObject(obj, ...fields) {
  const newObj = {};
  fields.forEach((field) => {
    if (obj[field]) {
      newObj[field] = obj[field];
    }
  });

  return newObj;
}

export default filterObject;
