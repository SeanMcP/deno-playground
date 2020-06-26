import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uuidArray: string[] = [];

for (let i = 0; i < 10; i++) {
  uuidArray.push(v4.generate());
}

console.log(uuidArray);

Deno.test({
  name: "Valid UUIDs",
  fn(): void {
    uuidArray.every(v4.generate);
  },
});
