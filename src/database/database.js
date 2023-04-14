import * as SQLite from 'expo-sqlite';

class Database {
    static instance = null;
    db = null;

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    async init() {
        console.log('init');
        this.db = SQLite.openDatabase({
            name: 'MainDB',
        }, () => { },
            error => { console.log(error); });
        await this.db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM marvelCharacter',
                [],
                (tx, results) => {
                    console.log(results)
                    console.log(tx)
                    const rows = results.rows;
                    for (let i = 0; i < rows.length; i++) {
                        console.log(rows.item(i));
                    }
                }
            );
        });
        await this.db.transaction(function (txn) {
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS marvelCharacter(' +
                'id INTEGER, ' +
                'name TEXT, ' +
                'description TEXT,' +
                'thumbnailUrl TEXT' +
                ')',
                [],
            );;
        })
    }

    async executeSql(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    sql,
                    params,
                    (tx, results) => {
                        resolve(results);
                    },
                    (tx, error) => {
                        reject(error);
                    },
                );
            });
        });
    }
}

export default Database.getInstance();
