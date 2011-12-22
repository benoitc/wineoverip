function (newDoc, oldDoc, userCtx, secObj) {
  if (userCtx.roles.indexOf('_admin') != -1) {
    return true; // admin can do anything
  }
 
  throw({unauthorized : "unauthorized access"});
}
