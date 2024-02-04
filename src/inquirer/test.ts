import { input, select, checkbox, confirm, password } from '@inquirer/prompts'
// import Stream from 'stream';

// const allowEmail = await confirm(
//     { message: 'Do you allow us to send you email?', },
//     {   
//         output: new Stream.Writable({
//             write(chunk, _encoding, next) {
//                 console.log("1")

//                 // Do something
//                 next();
//             },
//         }),
//         clearPromptOnDone: true,
//     },
// );

const answer = await confirm({ message: "213" }); // note: for this you cannot use `await`
console.log(answer.valueOf())