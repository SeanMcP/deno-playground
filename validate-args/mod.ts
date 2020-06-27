type ArgType = "string" | "number" | "boolean";

export function validateArgs(
  args: any[],
  rules: {
    type: ArgType;
    message?: string;
    name?: string;
    optional?: boolean;
  }[]
) {
  if (args.length !== rules.length) {
    throw Error('`args` and `rules` must have the same length')
  }

  for (let i = 0; i < rules.length; i++) {
    const { message, name, optional, type } = rules[i];
    const arg = args[i];

    // Does it exist?
    if (!arg) {
      if (optional) {
        continue;
      } else {
        throw new Error(
          message ||
            `Missing argument ${
              name ? `\`${name}\` ` : ""
            }at index ${i} of type ${type}`
        );
      }
    }

    // Is the it the right type?
    let typeError = false;

    switch (type) {
      case "number": {
        const coerced = +arg;
        if (isNaN(coerced) || typeof coerced !== "number") typeError = true;
        break;
      }
      case "boolean": {
        const lowerArg = arg.toLowerCase();

        if (lowerArg !== "true" && lowerArg !== "false") typeError = true;

        break;
      }
      case "string": {
        const lowerArg = arg.toLowerCase();
        if (!isNaN(+arg) || lowerArg === "true" || lowerArg === "false") {
          typeError = true;
        }

        break;
      }
    }

    if (typeError) {
      throw new TypeError(
        message || `Argument \`${arg}\` does not match type \`${type}\``
      );
    }
  }

  return true;
}
