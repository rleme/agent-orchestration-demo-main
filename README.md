# Order Processor

A minimal Node.js module that exports `processOrder(item, quantity, price)` to calculate order totals with input validation.

## Installation

No external dependencies are required.

## Quick Start

```js
const { processOrder } = require("./orderProcessor");

const order = processOrder("Notebook", 2, 14.5);
console.log(order);
// { item: 'Notebook', total: 29, status: 'processed' }
```

## API

### `processOrder(item, quantity, price)`

Processes a single order and returns a normalized result object.

#### Parameters
- `item` (`string`): Product name; must be a non-empty string.
- `quantity` (`number`): Must be a positive integer.
- `price` (`number`): Must be a non-negative finite number.

#### Returns
An object with:
- `item` (`string`)
- `total` (`number`) — rounded to 2 decimal places
- `status` (`'processed'`)

#### Validation and Errors
The function throws:
- `TypeError` for invalid `item` (empty or non-string)
- `TypeError` for non-integer `quantity`
- `RangeError` for `quantity <= 0`
- `TypeError` for non-finite or non-number `price`
- `RangeError` for `price < 0`

## Testing

Run tests with:

```bash
npm test
```

The test suite validates happy-path behavior, input validation, and floating-point rounding.
