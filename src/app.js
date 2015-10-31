(function() {

    UserViewModel.user = UserService.get();
    UserViewModel.render("user-profile");

})();