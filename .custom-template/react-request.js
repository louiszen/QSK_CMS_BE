let url = DOMAIN + ${1};
let payloadOut = {
  JWT: STORE.user.JWT,
  data: {

  },
  addOns: {}
}

try {

  console.log(${1}, payloadOut);

  STORE.isLoading(true);
  let res = await axios.post(url, payloadOut);
  STORE.isLoading(false);

  console.log(${1}, res.data);

  let {Success, payload} = res.data;
  if (Success === true) {
    this.setState((state, props) => ({
      /*Success*/
    }));
  } else {
    STORE.Alert(ErrorX.Handle(res.data), "error");
  }
} catch (e) {
  STORE.isLoading(false);
  STORE.Alert(ErrorX.Handle(e), "error");
}