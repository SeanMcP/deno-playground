import {
  assert,
  fail,
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import { validateArgs } from "./mod.ts";

Deno.test({
  name: "Validates strings",
  fn(): void {
    assertEquals(validateArgs(["foo"], [{ type: "string" }]), true);
  },
});

Deno.test({
  name: "Validates booleans",
  fn(): void {
    assertEquals(
      validateArgs(
        ["true", "false"],
        [{ type: "boolean" }, { type: "boolean" }]
      ),
      true
    );
  },
});

Deno.test({
  name: "Validates numbers",
  fn(): void {
    assertEquals(
      validateArgs(
        ["2", "1.2", "-3.14"],
        [{ type: "number" }, { type: "number" }, { type: "number" }]
      ),
      true
    );
  },
});

Deno.test({
  name: "Throws on invalid arg",
  fn(): void {
    assertThrows(() => {
      validateArgs(["2"], [{ type: "string" }]);
    }, TypeError);
  },
});

Deno.test({
  name: "Throws on missing arg",
  fn(): void {
    assertThrows(() => {
      validateArgs([undefined], [{ type: "string" }]);
    }, Error);
  },
});

Deno.test({
  name: "Allows missing optional arg",
  fn(): void {
    assertEquals(validateArgs([undefined], [{ type: "string", optional: true }]), true);
  },
});


Deno.test({
    name: "Throws on mismatched lengths",
    fn(): void {
      assertThrows(() => {
        validateArgs([], [{ type: "string" }]);
      }, Error);
    },
  });
