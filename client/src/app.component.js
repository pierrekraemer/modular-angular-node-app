import './app.css';

const AppComponent = {
    template: `
        <nav>
            <app-nav></app-nav>
        </nav>

        <main>
            <div ui-view></div>
        </main>

        <footer>
            <app-footer></app-footer>
        </footer>
    `
};

export default AppComponent;
