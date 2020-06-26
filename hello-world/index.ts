// You have access to the global Deno object

function greeting(name: string): void {
    console.log(`Hello ${name}`)
}

greeting(Deno.args[0])
