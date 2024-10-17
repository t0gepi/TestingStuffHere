var helloString = 'Hello world!';

var hello = function hello() {
  return helloString;
};

window.hello = hello;

window.hello();
