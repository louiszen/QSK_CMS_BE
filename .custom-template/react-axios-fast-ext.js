let reqPath = "${1}";
let url = DOMAIN + reqPath;
let payloadOut = {
  JWT: STORE.user.JWT,
  data: ${2},
  addOns: ${3}
};
try {
  let res = await axios.post(url, payloadOut);
  console.log(reqPath, res.data);

  let { Success, payload } = res.data;

  if (Success === true) {
    return {Success: true, payload: payload};
  } else {
    ${4}
    return {Success: false};
  }
} catch (e) {
  ${5}
  return {Success: false};
}