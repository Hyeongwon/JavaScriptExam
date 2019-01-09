function hello() {
  console.log(this.name);
}

var obj = {
  name: 'chris',
  hello: hello
};

// obj.hello(); // 암시적 바인딩

// setTimeout(obj.hello, 1000); // 결과는?

// hello.call(obj); // 명시적 바인딩

// setTimeout(obj.hello.bind(obj), 1000); // 하드 바인딩

// new 바인딩

obj.hello(); // 'chris'
obj.hello.call({name: 'bob'}); // 'bob'


var name = 'global context!';