## for가 들어가는 여러가지 구문

* var data = [1, 2, undefined, NaN, null];


### 일반적인 for문
```
for(i=0; i<data.length; i++;){
  console.log(data[i]);
}
```


### forEach문

- forEach문은 단순 반복문이 아닌, '함수'이다.
- 인자로 함수를 받아 각 배열의 요소에 해당 함수를 적용하는 방식이다.

```
data.forEach(function(value){
  console.log(value);
});
```


### for ... in 문

- for in은 Object에 있는 key에 차례로 접근하는 데 사용되는 반복문이다.
- Array에도 사용할 수도 있지만 일반적으로 Object를 제외한 객체에는 사용하지 않는 것이 좋다.
- for in으로 순회를 하게 되면 해당 요소뿐 아니라 prototype chain을 따라 확장 속성들도 함께 순회하기 때문이다.
- 즉, for...in은 Object의 key에 순차적으로 접근하기 위한 함수이다.

```

Object.prototype.foo = function(){
  return 0;
}

for(let idx in data){
  console.log(data[idx]);
}

/* 출력시 : 1, 2, undefined, NaN, null, f(){return 0;} */
```



### for ... of 문

- for ... of 문은 for in 문의 단점을 커버해준다.
- 배열이 아닌 문자열을 사용할 경우, 문자열 안의 알파벳 하나하나를 출력도 해줄 수 있다.
- for...of는 이터러블한 객체의 순회를 도와주는 함수이다.(하단 참고사항 참조)


```
for(let value of data){
  console.log(value);
}
```


### 참고사항
* 이터러블

순회 가능한 자료구조

이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값

Array, String, Map, Set, DOM data structures


* 이터레이터

순회 가능한 객체

{ value, done } 객체를 리턴하는 next() 를 가진 값

이터러블 프로토콜을 지킨 이터러블은 Symbol.iterator 메소드를 가지고 있다.

해당 이터러블이 Symbol.iterator 메소드를 호출하면 이터레이터를 반환할 수 있다.

이터레이터는 이터러블의 각 요소를 순회하기 위해 next 메소드를 갖는다.

next는 각 단계의 값인 value와 모든 단계를 끝냈는지를 알려주는 done을 반환한다.



출처: https://n-log.tistory.com/21 [N-Log]
