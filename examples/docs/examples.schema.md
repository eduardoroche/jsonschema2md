---
template: reference
foo: bar
---

# Examples Schema

```
https://example.com/schemas/examples
```

This is an example schema with _multiple_ examples. Too many examples? There can never be too many examples!

| [Abstract](../abstract.md) | Extensible | [Status](../status.md) | Identifiable | Custom Properties | Additional Properties | Defined In                                   |
| -------------------------- | ---------- | ---------------------- | ------------ | ----------------- | --------------------- | -------------------------------------------- |
| Can be instantiated        | No         | Experimental           | No           | Forbidden         | Permitted             | [examples.schema.json](examples.schema.json) |

## Examples Examples

```json
{
  "foo": "bi",
  "bar": "bu"
}
```

```json
{
  "foo": "zip",
  "bar": "zap"
}
```

# Examples Properties

| Property    | Type     | Required     | Nullable | Defined by                                 |
| ----------- | -------- | ------------ | -------- | ------------------------------------------ |
| [bar](#bar) | `string` | **Required** | No       | Examples (this schema)                     |
| [foo](#foo) | `string` | Optional     | No       | Examples (this schema)                     |
| `*`         | any      | Additional   | Yes      | this schema _allows_ additional properties |

## bar

A simple string.

`bar`

- is **required**
- type: `string`
- defined in this schema
- version: 1.0.0
- testProperty: test

### bar Type

`string`

### bar Examples

```json
"bar"
```

```json
"baz"
```

## foo

A simple string.

`foo`

- is optional
- type: `string`
- defined in this schema
- version: 1.0.0
- testProperty: test

### foo Type

`string`

### foo Example

```json
"bar"
```
