// 연산자(operator)

// 1. 산술연산자
// 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%), 증가(++), 감소(--) 등이 있다.

let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.33333333

console.log(x % y); // 10/3의 나머지값 1
console.log(x++); // 10 (x를 출력한 후에 1을 더한다. 후위 증가 연산자라 부른다.)
console.log(x); // 11 
console.log(++x); // 12 (x에 1을 더한 후에 출력한다. 전위 증가 연산자라 부른다.)
console.log(x--); // 12 (x를 출력한 후에 1을 뺀다.)
console.log(x); // 11 
console.log(--x); // 10 (x에서 1을 뺀 후에 출력한다.)


// ------------------------------------------------

// 2. 할당 연산자
// 할당 연산자는 변수에 값을 할당하는데 사용됩니다.

// 할당(=)
// 더하기 후 할당(+=)
// 곱하기 후 할당(*=)
// 나누기 후 할당(/=)
// 나머지 후 할당(%=)

let a =10; //10을 a에 할당 (넣는다.)
a += 5; // a = a + 5 와 같다.
console.log(a);

a -= 2; //a = a - 2 와 같다.
console.log(a); //13

a *= 2; //a = a * 2 와 같다.
console.log(a); //26

a /= 2; //a = a / 2와 같다.
console.log(a); //13


// ------------------------------------------------

// 3. 비교연산자
// 두 값을 비교하고, 그 결과를 불리언 값으로 반환된다.
// 동등(==), 부등(!=), 일치(===), 불일치(!==)
// 크다(>), 작다(<), 크거나 같다(>=), 작거나 같다(<=)

let b = 10;
let c = '10';

console.log(b == c); // true 타입을 고려하지 않은 동등 비교
console.log(b != c); // false 타입을 고려하지 않은 부등 비교
console.log(b === c); // false 타입을 고려한 일치 비교
console.log(b !== c); // true 타입을 고려한 불일치 비교

console.log(b > c); // false
console.log(b < c); // false
console.log(b >= c); // true
console.log(b <= c); // true


// ------------------------------------------------

// 4. 논리 연산자
// 논리 연산자는 불리언 값을 연산하는데 사용됩니다.
// 논리 AND(&&), 논리 OR(||), 논리 NOT(!)

let bool1 = true;
let bool2 = false;

console.log(bool1 && boo2); // false 더하기
console.log(bool1 || boo2); // true 빼기
console.log(!bool1); // false 연산자가 바뀜
console.log(!bool2); // true
