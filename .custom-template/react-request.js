let url = DOMAIN + ${1};
let payload = {
  JWT: store.user.JWT,
  data: {

  },
  addOns: {}
}

try {

  console.log(${1}, payload);

  store.isLoading(true);
  let res = await axios.post(url, payload);
  store.isLoading(false);

  console.log(${1}, res.data);

  if (res.data.Success === true) {
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