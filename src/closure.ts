//* Closure Variant I
function incrementor(base: number) {
  return function (additional: number) {
    return base + additional;
  };
}

let cc_ = incrementor(12);
console.log(cc_(45));
console.log(cc_(88));

//* Closure Variant II

function getUrlPath(domen: string) {
  return function path(url: string) {
    return `https://${url}.${domen}`
  };
}

let comUrl=getUrlPath("com")
console.log(comUrl("google"))
console.log(comUrl("facebook"))


let geUrl=getUrlPath("ge")
console.log(geUrl("gpost"))
console.log(geUrl("psp"))

/* https://google.com
https://facebook.com
https://gpost.ge
https://psp.ge
 */

const person1={"name":"George", "age":52}
const person2={"name":"Irina", "age":50}

function bind(){

    
}





