interface Point {
  x: number
  y: number
  z?: number
}

interface Triangle {
  points: Point[]
  color: string
}

interface Points {
  [key: string]: Point
}
