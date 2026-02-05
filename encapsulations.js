// Using functions closures to create encapsulated modules

function createAccount() {
    let balance = 0;
    
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if(amount < balance) {
                balance -= amount;
                // return;
            }
            console.log("Insufficient funds");
            return;
        },
        getBalance () {
            return balance;
        }
    };
}

let myAccount = createAccount();
myAccount.deposit(100);
myAccount.withdraw(135.50);
// console.log(myAccount.getBalance());
 

// using constructor functions

function acc() {
    let bal = 0;
    this.dep = function(amt) {
        bal += amt;
    }
    this.getBal = function() {
        return bal;
    }
    this.withd = function(amt) {
        if (amt < bal) {
            bal -= amt;
        } else {
            console.log("No balance");
            return;
        }
    }
}
let yourAccount = new acc();
yourAccount.dep(200);
yourAccount.withd(350);
// console.log(yourAccount.getBal());

// Counter Problem, starts from 0, increment possinle, decrement possible, cant modify directly from outside


function counter() {
    let counter = 10;
    return {
        inc() {
            counter++;
        },
        dec() {
            counter--;
        },
        get counter() {
            return counter;
        }
    }
}
let count = counter();
count.inc();
count.inc();
count.dec();
// console.log(count.counter);

function counterNew() {
    let countn = 0;
    this.inc = function() {
        countn++;
    }
    this.dec = function() {
        countn--;
    }
    this.getCountn = function() {
        return countn;
    }
}
let ncount = new counterNew();
ncount.inc();
ncount.dec();
// console.log(ncount.getCountn());


class CounterClass {
    #countt= 0;
    incr() {
        this.#countt++;
    }
    decr() {
        this.#countt--;
    }
    getCountt() {
        return this.#countt;
    }
}
let c = new CounterClass();
c.incr();
c.decr();
console.log(c.getCountt());


function passwordProtector(password) {
    return {
        checkPassword(p) {
            return p === password;
        }
    };
}
let u = passwordProtector("1234");
// console.log(u.checkPassword("1234"));
// console.log(u.checkPassword("1111"));

function protectPass (pass) {
    this.check = function(pa) {
        return pa === pass;
    }
}
let pas = new protectPass("abcd");
console.log(pas.check("abcde"));
console.log(pas.check("1234"));

