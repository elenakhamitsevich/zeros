module.exports = function getZerosCount(number) {
i=1;
count=0;
while (number/Math.pow(5,i)>=1){
  count = count + Math.floor(number/Math.pow(5,i));
  i++;
}
return count;
}
