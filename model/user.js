const { v4:uuidv4 }=require('uuid');
module.exports=class User{
    constructor(user) {
        this.name=user.name;
        this.email=user.email;
        this.password=user.password;
        this.confirmPassword=user.confirmPassword;
        this.mobileNumber=user.mobileNumber;
        this.country=user.country;
        this.userId=uuidv4();
    }
}