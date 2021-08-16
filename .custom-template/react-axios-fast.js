let { addOns } = this.props;
let url = DOMAIN + ${1};
let payloadOut = {
  JWT: store.user.JWT,
  data: {},
  addOns: addOns,
};
try {
  let res = await axios.post(url, payloadOut);
  console.log(${1}, res.data);

  let { Success, payload } = res.data;

  if (Success === true) {
    ${2}
  } else {
    ${3}
  }
} catch (e) {
  ${4}
}