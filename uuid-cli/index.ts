import { parse, v4 } from "./deps.ts";

const { count, array = false } = parse(Deno.args, {
  alias: { array: "A", count: "C" },
});

function newHandler(args: { count?: string; array?: boolean }) {
  const count = args.count && typeof +args.count === "number" ? args.count : 1;
  const arr = [];

  for (let i = 0; i < count; i++) {
    args.array ? arr.push(v4.generate()) : console.log(v4.generate());
  }

  args.array && console.log(arr);
}

switch (Deno.args[0]) {
  case "new":
    newHandler({ count, array });
    break;
  case "validate":
    if (Deno.args[1]) {
      console.log(v4.validate(Deno.args[1]));
    } else {
      console.warn("Pass a uuid to validate");
    }
    break;
  default: {
    console.log("Use commands `new` or `validate`");
  }
}
