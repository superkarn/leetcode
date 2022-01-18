# Information

## Multi-dimensional Arrays
### Instantiation
Do not use `Array.fill()` to create multi-dimensional arrays.  
This is because it will create one row that is referenced multiple times.
See [here](https://stackoverflow.com/a/47057799/1398750) for more info.

```javascript
// Bad:
let data = Array(length1).fill(Array(length2).fill(0));

// Good:
let data = [];
for (let i = 0; i<length1; i++) {
    data[i] = [];
    for (let j=0; j<length2; j++) {
        data[i][j] = 0;
    }
}
```

### Print
```javascript
let print2DArray = (a) => {
    let result = '\r\n';
    for (let i = 0; i<a.length; i++) {
        result += a[i] + "\r\n";
    }
    return result;
};
```
