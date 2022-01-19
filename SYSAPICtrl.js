const SYSAPICtrl = {
  "CommonAPI/Auth/SignIn": true,
  "CommonAPI/Auth/CheckUserName": true,
  "CommonAPI/Auth/MSALConfig": true,
  "CommonAPI/Auth/VerifyOTP": true,
  "CommonAPI/Env/Init": true,
  "CommonAPI/Env/IsInitialized": true,
  "CommonAPI/Env/Info": true,
  "CommonAPI/User/List": true,
  "CommonAPI/DBConfig/Info": true,
  "CommonAPI/DBConfig/Edit": true,
  "CommonAPI/DBConfig/Include": true,
  "CommonAPI/BnR/Info": true,
  "CommonAPI/BnR/Backup": true,
  "CommonAPI/BnR/Restore": true,
  "CommonAPI/BnR/Delete": true,
  "CommonAPI/Restore/RenewAuthority": true
};

module.exports = SYSAPICtrl;