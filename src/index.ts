/**
 * The program is the assignment 3.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2020-11-01
 */

// Import
import Triangle from './Triangle'

console.log('')

// Triangle 1
const testTriangle1 = new Triangle(3, 4, 5)

console.log('Created a 3 mm by 4 mm by 5 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle1.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle1.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle1.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle1.getType())
console.log(' → Angle 1: ' + testTriangle1.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle1.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle1.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle1.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle1.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle1.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle1.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle1.circumsicleRadius().toFixed(4) +
    ' mm'
)
console.log('')

// Triangle 2
const testTriangle2 = new Triangle(3, 3, 3)
console.log('Created a 3 mm by 3 mm by 3 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle2.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle2.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle2.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle2.getType())
console.log(' → Angle 1: ' + testTriangle2.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle2.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle2.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle2.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle2.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle2.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle2.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle2.circumsicleRadius().toFixed(4) +
    ' mm'
)
console.log('')

// Triangle 3
const testTriangle3 = new Triangle(3, 4, 4)
console.log('Created a 3 mm by 4 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle3.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle3.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle3.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle3.getType())
console.log(' → Angle 1: ' + testTriangle3.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle3.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle3.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle3.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle3.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle3.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle3.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle3.circumsicleRadius().toFixed(4) +
    ' mm'
)
console.log('')

// Triangle 4
const testTriangle4 = new Triangle(2, 3, 4)
console.log('Created a 2 mm by 3 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle4.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle4.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle4.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle4.getType())
console.log(' → Angle 1: ' + testTriangle4.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle4.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle4.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle4.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle4.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle4.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle4.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle4.circumsicleRadius().toFixed(4) +
    ' mm'
)
console.log('')

// Triangle 5
const testTriangle5 = new Triangle(23, 4, 6)
console.log('Created a 23 mm by 3 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle5.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle5.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle5.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle5.getType())
console.log(' → Angle 1: ' + testTriangle5.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle5.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle5.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle5.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle5.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle5.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle5.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle5.circumsicleRadius().toFixed(4) +
    ' mm'
)

// Finsh output
console.log('\nDone.')
