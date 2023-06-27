// 자바스크립트 기본 용어
// 1. 표현식 & 문장

// 표현식(식) : 자바스크립트 값(데이터)을 만들어내는 간단한 코드
// 연산식, 실제 값, 함수

inch * 2.54 // 연산식
"안녕하세요" // 문자식(문자열)
5 // 숫자(실제 값)

// 문장(문) : 명령, 문장의 끝에는 세미콜론(;)을 붙여서 구분
// 하나 이상의 표현식이 모이면 문장

let cm = inch * 2.54;
let hello = '안녕하세요';
let number =5;

// ------------------------------------------------

// 2. 키워드 & 식별자
// 키워드(예약어) : 특별한 의미가 있는 단어
// 식별자 : 개발자가 자바스크립트의 변수, 함수, 속성 등을 구별하려고 이름 붙인 특정 단어를 의미

// ------------------------------------------------

// 3. 출력
// 자바스크립트의 기본 입출력 방법

// 3-1. 알림 창 출력하기(alert : 알리다, 경고하다)
// 기본형 : alert('메시지')

// 3-2. 확인 창 출력하기(confirm : 확인하다)
// 사용자가 [확인]이나 [취소] 버튼 중에서 직접 클릭할수 있도록 동작한다.
// 사용자가 선택한 결과(동작)에 맞게 프로그램이 동작한다.
// 기본형 : confirm('메시지') 

// 3-3. 프롬프트 창에서 입력받기
// 텍스트 필드가 있는 작은 창을 출력한다.
// 간단한 메시지 입력 받는 것이 가능, 그 내용을 가져와 프로그램에서 사용가능하다.
// 기본형 : prompt('메시지') 또는 prompt('메시지', '기본값')

// 3-4. 웹 브라우저 화면에 출력
// 단순히 브라우저 화면에서 결괏값을 확인하는 용도로 자주 사용

// 기본형 : document.write('');
// document(웹 문서)에서 괄호 안의 내용을 write(표시)하는 명령문
// 괄호 안에 웹 브라우저 화면에 표시할 내용 작성()
// 괄호 안에 브라우저 화면에 표시할 내용 작성(HTML 태그 사용 가능)
// 어떤 결괏값이 저장된 변수 삽입 가능
// 웹 브라우저 화면에 표시할 내용과 변수를 섞어서 나타낼 수도 있다. (+연산자를 사용 : 더하기 아님! 연결 연산자)

// ------------------------------------------------

// 콘솔 창에 출력

// console.log()문은 괄호 안의 내용을 콘솔 창에 표시
// 소스 코드의 오류를 발견하거나 변숫값을 확인
// 괄호 안에 실제 웹 브라우저 화면에 표시할 내용 작성(HTML 태그 사용 불가)
// 어떤 결괏값이 저장된 변수 삽입 가능