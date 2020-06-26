import { v4 } from "./deps.ts";

const [first] = Deno.args
const count = first && typeof +first === 'number' ? first : 1

for (let i = 0; i < count; i++) {
  console.log(v4.generate());
}
