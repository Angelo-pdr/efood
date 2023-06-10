class Food {
  title: string
  evaluation: number
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    title: string,
    infos: string[],
    evaluation: number,
    description: string,
    image: string,
    id: number
  ) {
    this.title = title
    this.infos = infos
    this.evaluation = evaluation
    this.description = description
    this.image = image
    this.id = id
  }
}

export default Food
