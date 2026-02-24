/**
 * Processes an order and returns a normalized result.
 *
 * @param {string} item - Product name. Must be a non-empty string.
 * @param {number} quantity - Number of units. Must be a positive integer.
 * @param {number} price - Unit price. Must be a non-negative finite number.
 * @returns {{ item: string, total: number, status: "processed" }}
 * An object containing the trimmed item name, rounded total, and processed status.
 * @throws {TypeError} If item is not a non-empty string.
 * @throws {TypeError} If quantity is not an integer.
 * @throws {RangeError} If quantity is less than or equal to 0.
 * @throws {TypeError} If price is not a finite number.
 * @throws {RangeError} If price is less than 0.
 */
function processOrder(item, quantity, price) {
    if (typeof item !== "string" || item.trim().length === 0) {
        throw new TypeError("item must be a non-empty string");
    }

    if (!Number.isInteger(quantity)) {
        throw new TypeError("quantity must be an integer");
    }

    if (quantity <= 0) {
        throw new RangeError("quantity must be greater than 0");
    }

    if (typeof price !== "number" || !Number.isFinite(price)) {
        throw new TypeError("price must be a finite number");
    }

    if (price < 0) {
        throw new RangeError("price must be greater than or equal to 0");
    }

    const normalizedItem = item.trim();
    const total = Math.round(quantity * price * 100) / 100;

    return {
        item: normalizedItem,
        total,
        status: "processed"
    };
}
module.exports = { processOrder };