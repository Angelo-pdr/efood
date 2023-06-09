class Food {
  title: string
  evaluation: number
  description: string
  category: string[]
  image: string
  id: number

  constructor(
    title: string,
    category: string[],
    evaluation: number,
    description: string,
    image: string,
    id: number
  ) {
    this.title = title
    this.category = category
    this.evaluation = evaluation
    this.description = description
    this.image = image
    this.id = id
  }
}

export default Food
