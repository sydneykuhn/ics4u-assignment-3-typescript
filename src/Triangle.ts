/**
 * Triangle Class.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-11-01
 */

class Triangle {
  private readonly side1: number
  private readonly side2: number
  private readonly side3: number

  // Triangle Constructor
  constructor(side1: number, side2: number, side3: number) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
  }

  // Getters for Sides
  public getSide1(): number {
    return this.side1
  }

  public getSide2(): number {
    return this.side2
  }

  public getSide3(): number {
    return this.side3
  }

  // perimeter Method
  private perimeter(): number {
    let perimeter

    if (this.isValid()) {
      perimeter = this.side1 + this.side2 + this.side3
    } else {
      perimeter = -1
    }

    return perimeter
  }

  // semiPerimeter Method
  public semiPerimeter(): number {
    let semiPerimeter
    if (this.isValid()) {
      semiPerimeter = this.perimeter() / 2
    } else {
      semiPerimeter = -1
    }
    return semiPerimeter
  }

  // isValid Method
  public isValid(): boolean {
    let valid = false
    const sides = [this.side1, this.side2, this.side3]

    // Checks for Negatives
    if (!(Math.min(...sides) < 0)) {
      const sides = [this.side1, this.side2, this.side3]
      sides.sort(function (a, b) {
        return a - b
      })
      valid = sides[0] + sides[1] > sides[2]
    }

    return valid
  }

  // getAngles Method
  public angle(angleNumber: number): number {
    if (this.isValid() && angleNumber > 0 && angleNumber < 4) {
      let angle1 = 0
      let angle2 = 0
      let angle3 = 0
      let angle = []

      angle1 = Math.acos(
              (Math.pow(this.side1, 2) +
               Math.pow(this.side2, 2) -
               Math.pow(this.side3, 2)) /
               (2 * this.side1 * this.side2))
      angle2 = Math.acos(
              (Math.pow(this.side1, 2) +
               Math.pow(this.side3, 2) -
               Math.pow(this.side2, 2)) /
               (2 * this.side1 * this.side3))
      angle3 = Math.acos(
              (Math.pow(this.side2, 2) +
               Math.pow(this.side3, 2) -
               Math.pow(this.side1, 2)) /
               (2 * this.side2 * this.side3))

      // Return Values as an Array
      angle = [angle1, angle2, angle3]

      return angle[angleNumber - 1]
    } else {
      return -1
    }
  }

  // area Method
  public area(): number {
    if (this.isValid()) {
      // The semi-perimeter
      const sp = this.semiPerimeter()
      const area = Math.sqrt(
        sp * (sp - this.side1) * (sp - this.side2) * (sp - this.side3)
      )

      return area
    } else {
      return -1
    }
  }

  // getType Method
  public getType(): string {
    if (this.isValid()) {
      let name = ''

      if (this.side1 === this.side2 && this.side2 === this.side3) {
        name = 'Equilateral'
      } else if (
        (this.side1 === this.side2 && this.side1 !== this.side3) ||
        (this.side2 === this.side3 && this.side2 !== this.side1) ||
        (this.side3 === this.side1 && this.side3 !== this.side2)
      ) {
        name = 'Isosceles'
      } else {
        const angles = [this.angle(1), this.angle(2), this.angle(3)]
        let rightAngle = false

        // Checks for 90 Degree Angle
        for (let count = 0; count < angles.length; count++) {
          if (angles[count] * (180 / Math.PI) === 90) {
            rightAngle = true
            break
          }
        }

        if (rightAngle) {
          name = 'Right Angle'
        } else {
          name = 'Scalene'
        }
      }
      return name
    } else {
      return '-1'
    }
  }

  // height Method
  height(side: number): number {
    let height: number
    const area: number = this.area()
    if (side === 1) {
      height = (2 * area) / this.side1
    } else if (side === 2) {
      height = (2 * area) / this.side2
    } else {
      height = (2 * area) / this.side3
    }
    return height
  }

  // innerCircleRadius Method
  innerCircleRadius(): number {
    return this.area() / this.semiPerimeter()
  }

  // circumsicleRadius Method
  circumsicleRadius(): number {
    let circumradius = 0
    let pi = 3.14
    circumradius =
      (this.side1 * this.side2 * this.side3) / (4 * this.innerCircleRadius() * this.semiPerimeter())
    return circumradius
  }
}

export = Triangle
