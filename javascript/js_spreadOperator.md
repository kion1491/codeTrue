### 확장연산자(spread operator)

* ... 을 사용하여 표현할 수 있는 방법.

```
let pre = [3, 4, 5];
let test = [0, 1, 2, ...pre, 6, 7, 8];

console.log(test)     /* [0, 1, 2, 3, 4, 5, 6, 7, 8] */
```

* 인자값으로도 사용할 수 있다.

```
let sample = [1, 2, 3];

function sum(a, b, c){
  return a+b+c;
}

console.log(sum(...sample));      /* 6 */

```
