import { classifyTemperature } from "./classifyTemperature.js";
import { test, expect } from "@jest/globals";


test("-1000000, return 'very freezing'", () => {
    expect(classifyTemperature(-1000000)).toBe("very freezing");
  });


  test("-21, return 'very freezing'", () => {
    expect(classifyTemperature(-21)).toBe("very freezing");
  });

  test("-15, return 'freezing'", () => {
    expect(classifyTemperature(-15)).toBe("freezing");
  });

  test("9, return 'chilly'", () => {
    expect(classifyTemperature(9)).toBe("chilly");
  });

  test("16 return 'pleasant'", () => {
    expect(classifyTemperature(16)).toBe("pleasant");
  });

  test("35, return 'hot'", () => {
    expect(classifyTemperature(35)).toBe("hot");
  });

  test("50, return 'too hot'", () => {
    expect(classifyTemperature(50)).toBe("too hot");
  });

  test("5000, return 'too hot'", () => {
    expect(classifyTemperature(5000)).toBe("too hot");
  });

  test("-20, return 'freezing'", () => {
    expect(classifyTemperature(-20)).toBe("freezing");
  });

  test("0, return 'chilly'", () => {
    expect(classifyTemperature(0)).toBe("chilly");
  });

  test("15, return 'pleasant'", () => {
    expect(classifyTemperature(15)).toBe("pleasant");
  });

  test("25, return 'hot'", () => {
    expect(classifyTemperature(25)).toBe("hot");
  });

  test("40, return 'too hot'", () => {
    expect(classifyTemperature(40)).toBe("too hot");
  });