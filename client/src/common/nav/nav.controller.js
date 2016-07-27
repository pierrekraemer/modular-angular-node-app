const NavController = function (AuthService) {

    const data = {
        isNavbarCollapsed: true
    };

    Object.assign(this, {
        data,
        AuthService
    });

};

export default NavController;
