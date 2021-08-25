let url = DOMAIN + ${1};
let payloadOut = {
  JWT: store.user.JWT,
  data: {

  },
  addOns: {}
}

try {

  console.log(${1}, payloadOut);

  store.isLoading(true);
  let res = await axios.post(url, payloadOut);
  store.isLoading(false);

  console.log(${1}, res.data);

  let {Success, payload} = res.data;
  if (Success === true) {
    this.setState((state, props) => ({
      /*Success*/
    }));
  } else {
    store.Alert(ErrorX.Handle(res.data), "error");
  }
} catch (e) {
  store.isLoading(false);
  store.Alert(ErrorX.Handle(e), "error");
}