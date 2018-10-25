interface directions {
  TL?: string
  TR?: string
  BL?: string
  BR?: string
  L?: string
  R?: string
}

type direction = 'TL' | 'TR' | 'BL' | 'BR' | 'L' | 'R'

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
