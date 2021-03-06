---
template: reference
foo: bar
---

# Example Schema

```
https://example.com/schemas/example
```

This is an example schema with examples. Too many examples? There can never be too many examples!

| [Abstract](../abstract.md) | Extensible | [Status](../status.md) | Identifiable | Custom Properties | Additional Properties | Defined In                                 |
| -------------------------- | ---------- | ---------------------- | ------------ | ----------------- | --------------------- | ------------------------------------------ |
| Can be instantiated        | No         | Experimental           | No           | Forbidden         | Permitted             | [example.schema.json](example.schema.json) |

## Example Example

```json
{
  "foo": "bar",
  "bar": "baz"
}
```

# Example Properties

| Property    | Type     | Required   | Nullable | Defined by                                 |
| ----------- | -------- | ---------- | -------- | ------------------------------------------ |
| [bar](#bar) | `string` | Optional   | No       | Example (this schema)                      |
| [foo](#foo) | `string` | Optional   | No       | Example (this schema)                      |
| `*`         | any      | Additional | Yes      | this schema _allows_ additional properties |

## bar

A simple string.

`bar`

- is optional
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
