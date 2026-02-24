function processOrder(item, quantity, price) {
    // Basic logic without docs or error handling
    const total = quantity * price;
    return {
        item: item,
        total: total,
        status: "processed"
    };
}
module.exports = { processOrder };