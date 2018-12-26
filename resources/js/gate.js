export default class gate{

    constructor(user){
        this.user = user;
    }

    isAdmin(){
        return this.user.type === 'admin';
    }

    isUser(){
        return this.user.type === 'user';
    }

    isAdminOrAuthor(){
        return (this.user.type === 'admin' || this.user.type === 'author');
    }

    isAuthorOrUser(){
        return (this.user.type === 'author' || this.user.type === 'user');
    }
}