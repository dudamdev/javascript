// let age = 23;

// let strictlyVerifyWithNumber = age === 23;
// let verifyWithNumber = age == 23;
// let strictlyVerifyWithString = age === "23";
// let verifyWithString = age == "23";

// console.log(`Strictly Verifying with Number: ${strictlyVerifyWithNumber}`);     // true
// console.log(`Verifying with Number: ${verifyWithNumber}`);                      // true
// console.log(`Strictly Verifying with String: ${strictlyVerifyWithString}`);     // false
// console.log(`Verifying with String: ${verifyWithString}`);                      // true

// ############################################################################################################################################################################

// let authenticated = false

// // if (authenticated) {
// //     console.log("Show singout button");
// // } else {
// //    console.log("Show Login");
// // }

// authenticated ? console.log("Show singout button") : console.log("Show Login");

// ############################################################################################################################################################################


// let user = "other"

// switch (user) {
//     case "admin":
//         console.log("You get full access");
//
//     case "subadmin":
//         console.log("Access to create/delete courses");
//
//     case "testprep":
//         console.log("Access to create/delete tests");
//
//     case "user":
//         console.log("Access to cconsume the content");
//
//     default:
//         console.log("Trial user");
//        // }

// ############################################################################################################################################################################

// let sayHello = function (name) {
//     console.log(`Hello there, ${name}! Welcome to your life!`)
// }

// sayHello("Duda")
// sayHello("Gabi")
// sayHello("Ste")
// sayHello("Amandita")
// sayHello("Lo")

// let namastey = function () {
//     return "Hello from India"
// }

// console.log(namastey());

// ############################################################################################################################################################################

// let getUserRole = function (name, role) {
//     switch (role) {
//         case "admin":
//             return `${name} is ${role} with all access`

//         case "subadmin":
//             return `${name} is ${role} with access to create/delete courses`

//         case "testprep":
//             return `${name} is ${role} with access to create/delete tests`

//         case "user":
//             return `${name} is ${role} with access to cconsume the content`

//         default:
//             return `${name} is test user`
//     }
// }


// console.log(getUserRole("Duda", "test"))

// ############################################################################################################################################################################

tipper("75")
function tipper(a) {
    let bill = parseInt(a);     // espera um número inteiro
    console.log(bill + 5);
}
