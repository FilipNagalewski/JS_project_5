function getTriangleArea(a, h) {
  var a,
    h,
    triangleArea;

    if (a > 0 && h > 0) {
      triangleArea = a*h/2;
      console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea),
      alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
    } else {
      console.log('Nieprawidłowe dane'),
      alert('Nieprawidłowe dane');
    }
    return a*h/2;
  }

console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(8, 15);
var triangle1Area = getTriangleArea(4, 9);
var triangle1Area = getTriangleArea(12, 4);
