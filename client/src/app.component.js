import './app.css';

const AppComponent = {
	bindings: {
		authData: '<'
	},
    template: `
        <app-nav></app-nav>

        <main class="container">
            <div ui-view></div>
        </main>

        <footer>
            <div class="container">
                <p> Powered by Angular components </p>
            </div>
        </footer>
    `
};

export default AppComponent;
