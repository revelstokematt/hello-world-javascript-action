# Hello world javascript action

This action prints "Hello World" or "Hello" + the names of a people to greet to the log.

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
  github-token: ${{ secrets.GITHUB_TOKEN }}
  reviewers: user-name
  team-reviewers: slug/team-name
```
