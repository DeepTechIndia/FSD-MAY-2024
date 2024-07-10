// logical ANd - short circuiting

let a = true && false;
console.log(a);

let b = false && true;
console.log(b);

let c = 0 && 2;
console.log(c);

let d = 1 && 2 && 3 && 4;
console.log(d);

let e = 1 && 2 && 0 && 4;
console.log(e);

let users = {
  isLoggedIn: true,
  hasAccess: true,
  name: " abc",
};

if (users.isLoggedIn && users.hasAccess) {
  console.log(`Welcome, ${users.name}`);
} else {
  console.log("Access Denied");
}
