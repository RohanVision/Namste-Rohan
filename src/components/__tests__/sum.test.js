import { multiply, sum } from "../sum"

test("sum function should calculate the sum of two numbers", () => {
    const result = sum(3, 4);

    // Assertion (expect statement)
    expect(result).toBe(7);
})

test("This will multiply the inputs", () => {
    const multiResult = multiply(4, 5);

    expect(multiResult).toBe(20);
})