export class DemoClassModel {
  id: number
  name: string
  description: string

  constructor(id: number, name: string, description: string) {
    this.id = id
    this.name = name
    this.description = description
  }
    getInformation(): string {
    return `${this.name}: ${this.description}`
  }
}