// for terminal input
// const a = parseInt(process.argv[2])
// const b = parseInt(process.argv[3])

// for input of .env file

const a = parseInt(process.env.A)
const b = parseInt(process.env.B)

if (isNaN(a) || isNaN(b)) {
  throw new Error("Environment variables A and B must be numbers");
}

function sum(x,y){
    return x + y;
}

console.log(sum(a,b));
