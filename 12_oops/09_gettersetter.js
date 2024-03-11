class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){

        return this._email.toUpperCase();
    }

    set email(value){

         this._email = value;
    }

    get password(){
        // return this._password.toUpperCase();

        return `${this._password}vaishnavi`
    }

    set password(value){
        this._password = value;
    }
}

const vaishnavi = new User("v@vaishnavi.ai","abc");

console.log(vaishnavi.password);
console.log(vaishnavi.email);

