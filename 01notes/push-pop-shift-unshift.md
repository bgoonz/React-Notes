Push, Pop, Shift and Unshift Array Methods in JavaScript
========================================================

js

In this article, we will learn about four array methods i.e. push(), pop(), shift() and unshift() which allow us to add and remove elements from beginning and end of an array.

push(): Add elements to the end of an Array
-------------------------------------------

![Array Push](https://firebasestorage.googleapis.com/v0/b/hackinbits.appspot.com/o/arr_push.png?alt=media&token=263a2906-3a69-4291-9462-68b9566bc6dd)

Using push() we can add elements to the end of an array.

```
let arr = [ 1, 2, 3 ];
arr.push(4);
console.log(arr);
// [ 1, 2, 3, 4 ]
```

push() returns length of the new array.

```
let arr = [ 1, 2, 3, 4 ];
let arrLength = arr.push( 5, 6, 7 );
console.log(arrLength);
// 7
```

pop(): Remove an element from end of an Array
---------------------------------------------

![Array Pop](https://firebasestorage.googleapis.com/v0/b/hackinbits.appspot.com/o/arr_pop.png?alt=media&token=8c14a2d2-fd6a-4910-8609-3670656874d0)

Pop remove the last element in an Array.

```
let arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);
// [ 1, 2, 3 ]
```

pop() returns the removed element.

```
let arr = [ 1, 2, 3, 4 ];
let removedElement = arr.pop();
console.log(removedElement);
// 4
```

shift(): Remove an Element from the front of an Array
-----------------------------------------------------

![Array Shift](https://firebasestorage.googleapis.com/v0/b/hackinbits.appspot.com/o/arr_shift.png?alt=media&token=7b6b860a-974c-440b-b2ec-ac26f45af66f)

Shift remove the first element in an Array.

```
let arr = [ 0, 1, 2, 3 ];
arr.shift();
console.log(arr);
// [ 1, 2, 3 ]
```

shift() returns the removed element from the array.

```
let arr = [ 0, 1, 2, 3 ];
let removedElement = arr.shift();
console.log(removedElement);
// 0
```

unshift(): Add elements to the front of an Array
------------------------------------------------

![Array Unshift](https://firebasestorage.googleapis.com/v0/b/hackinbits.appspot.com/o/arr_unshift.png?alt=media&token=cfe48f02-347a-4975-bb0d-c00466f61918)

Using unshift() we can add elements to the front of an array.

```
let arr = [ 1, 2, 3 ];
arr.unshift(0);
console.log(arr);
// [ 0, 1, 2, 3 ]
```

unshift() returns length of the new array.

```
let arr = [ 4, 5, 6 ];
let arrLength = arr.unshift( 0, 1, 2, 3 );
console.log(arrLength);
// 7
```
