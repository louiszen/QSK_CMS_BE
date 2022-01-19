const SYSAPI = [
  "CommonAPI/Auth/SignIn",
  "CommonAPI/Auth/CheckUserName",
  "CommonAPI/Auth/MSALConfig",
  "CommonAPI/Auth/VerifyOTP",
  "CommonAPI/Env/Init",
  "CommonAPI/Env/IsInitialized",
  "CommonAPI/Env/Info",
  "CommonAPI/User/List",
  "CommonAPI/DBConfig/Info",
  "CommonAPI/DBConfig/Edit",
  "CommonAPI/DBConfig/Include",
  "CommonAPI/BnR/Info",
  "CommonAPI/BnR/Backup",
  "CommonAPI/BnR/Restore",
  "CommonAPI/BnR/Delete",
  "CommonAPI/Restore/RenewAuthority",
  "CommonAPI/Report/Bug"
];

module.exports = SYSAPI;