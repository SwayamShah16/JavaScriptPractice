function display<T>(arg: T): T {
    return arg;
}

console.log(display<string>("Hello, TypeScript!"));
console.log(display<number>(42));