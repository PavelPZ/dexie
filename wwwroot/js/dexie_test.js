import Dexie from './dexie.js';
//
// Declare Database
//
class FriendDatabase extends Dexie {
    constructor() {
        super("FriendsDatabase");
        this.version(1).stores({
            friends: "++id,name,age"
        });
    }
}
function run() {
    var db = new FriendDatabase();
    //
    // Manipulate and Query Database
    //
    db.friends.add({ name: "Josephine", age: 21 }).then(() => {
        return db.friends.where("age").below(25).toArray();
    }).then(youngFriends => {
        alert("My young friends: " + JSON.stringify(youngFriends));
    }).catch(e => {
        alert("error: " + e.stack || e);
    });
}
window['dexie_test'] = run;
//# sourceMappingURL=dexie_test.js.map