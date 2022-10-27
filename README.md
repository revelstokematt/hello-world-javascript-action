# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a people in the array to greet to the log.

## Inputs

### `who-to-greet`

**Required** The names of the people to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'name1,name2,name3'
```