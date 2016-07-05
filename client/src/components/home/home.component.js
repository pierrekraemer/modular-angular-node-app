import controller from './home.controller';

const HomeComponent = {
    controller,
    template: `
        <h1> Welcome home :-) </h1>

        <label>Username</label>
        <input type="text" ng-model="$ctrl.user.name">

        <p> {{ $ctrl.user.name }} </p>
    `
};

export default HomeComponent;
