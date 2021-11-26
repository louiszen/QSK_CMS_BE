let { addOns } = this.props;
let reqPath = "${1}"
let url = DOMAIN + reqPath;
let payloadOut = {
  JWT: STORE.user.JWT,
  data: {},
  addOns: addOns,
};
try {
  let res = await axios.post(url, payloadOut);
  console.log(reqPath, res.data);

  let { Success, payload } = res.data;

  if (Success === true) {
    ${2}
  } else {
    ${3}
  }
} catch (e) {
  ${4}
}