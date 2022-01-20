if(!AuthX.PassF("${1}", "${2}")){
  STORE.Alert(LocaleX.GetIZO("Alert.NoAuthority"), "error");
  return;
}