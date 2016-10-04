const UserModel = {

    hasRole: function (role) { return this.roles && this.roles.indexOf(role) > -1; }

};

const UserService = () => ({

    makeUser: (data) => {
        const u = Object.create(UserModel);
        Object.assign(u, data);
        return u;
    }

});

export default UserService;
