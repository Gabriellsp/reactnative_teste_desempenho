import * as SQLite from "expo-sqlite";

class Database {
    static instance = null;
    db = null;

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    init() {
        this.db = SQLite.openDatabase('tcc.db');
        this.db.transaction(tx => {
            tx.executeSql(
                "create table if not exists marvelCharacter (marvelId integer, name text, description text, thumbnailUrl text);",
            );
        });
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
