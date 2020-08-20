# format-json

## POST /

Format JSON with 2 spaces by default

## POST /{spaces | TAB}

Format JSON with a given number of spaces or TAB character

```bash
# compress the JSON
cat file.json | fn format-json 0

# format with 4 spaces
cat file.json | fn format-json 4

# format with tabs
cat file.json | fn format-json TAB
```
