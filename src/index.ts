import Database from './loaders/dbLoader';
import Express from './loaders/expressLoader';

export default class App {
    // Clear the console
    private _clearConsole(): void {
        process.stdout.write('\x1B[2J\x1B[0f');
    }
    public async bootstrap() {
        this._clearConsole();
        Database.init();
        Express.init();
    }
}