type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;
type SecondArgument<T> = T extends (arg1: any, arg2: infer U, ...args: any[]) => any ? U : any;

function hello(username: string, times: number): void {
  console.log(`Hello to ${username} x ${times}`)
}

const arg1: FirstArgument<typeof hello> = 'typescript'; // string;
const arg2: SecondArgument<typeof hello> = 100; // number;
