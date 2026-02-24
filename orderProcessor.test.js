const { processOrder } = require("./orderProcessor");

describe("processOrder", () => {
    test("processes a valid order", () => {
        const result = processOrder("Book", 2, 10);
        expect(result).toEqual({
            item: "Book",
            total: 20,
            status: "processed"
        });
    });

    test("trims item name", () => {
        const result = processOrder("  Pen  ", 1, 1.5);
        expect(result.item).toBe("Pen");
    });

    test("rounds floating-point totals to 2 decimals", () => {
        const result = processOrder("Widget", 3, 0.1);
        expect(result.total).toBe(0.3);
    });

    test("throws for empty item", () => {
        expect(() => processOrder("   ", 1, 10)).toThrow(TypeError);
        expect(() => processOrder("   ", 1, 10)).toThrow("item must be a non-empty string");
    });

    test("throws for non-string item", () => {
        expect(() => processOrder(null, 1, 10)).toThrow(TypeError);
        expect(() => processOrder(null, 1, 10)).toThrow("item must be a non-empty string");
    });

    test("throws for zero quantity", () => {
        expect(() => processOrder("Book", 0, 10)).toThrow(RangeError);
        expect(() => processOrder("Book", 0, 10)).toThrow("quantity must be greater than 0");
    });

    test("throws for non-integer quantity", () => {
        expect(() => processOrder("Book", 1.5, 10)).toThrow(TypeError);
        expect(() => processOrder("Book", 1.5, 10)).toThrow("quantity must be an integer");
    });

    test("throws for non-number quantity", () => {
        expect(() => processOrder("Book", "2", 10)).toThrow(TypeError);
        expect(() => processOrder("Book", "2", 10)).toThrow("quantity must be an integer");
    });

    test("throws for negative price", () => {
        expect(() => processOrder("Book", 1, -1)).toThrow(RangeError);
        expect(() => processOrder("Book", 1, -1)).toThrow("price must be greater than or equal to 0");
    });

    test("throws for non-finite price", () => {
        expect(() => processOrder("Book", 1, Number.POSITIVE_INFINITY)).toThrow(TypeError);
        expect(() => processOrder("Book", 1, Number.POSITIVE_INFINITY)).toThrow("price must be a finite number");
    });

    test("throws for non-number price", () => {
        expect(() => processOrder("Book", 1, "10")).toThrow(TypeError);
        expect(() => processOrder("Book", 1, "10")).toThrow("price must be a finite number");
    });
});
