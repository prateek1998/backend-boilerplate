import App from './src';

export async function startServer() {
    const app = new App();
    app.bootstrap();
}

startServer();