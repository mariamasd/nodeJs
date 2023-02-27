var generator=require("generate-password")
var password=generator.generate({
    length:8,
    numbers:true
});
console.log(password);