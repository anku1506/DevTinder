const adminAuth=(req, res, next) => {
    const token = "xyz";
    const isAdminAuthorizesd = token == "xyz";
    console.log("IsAdminAuthorized checked", isAdminAuthorizesd);
    if(!isAdminAuthorizesd){
        res.status(401).send("Unauthorized access");
    } else {
        next();
    }
}


const userAuth=(req, res, next) => {
    const token = "xyz";
    const isAdminAuthorizesd = token == "xyz";
    console.log("IsuserAuthorized checked", isAdminAuthorizesd);
    if(!isAdminAuthorizesd){
        res.status(401).send("Unauthorized access from user auth");
    } else {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth,
}




