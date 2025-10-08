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


export class demoGenericClass<T> {
    private items: T[] = []


    addItem(item: T): void {
        this.items.push(item)
    }

    getItems(): T[] {
        return this.items
    }

    removeItem(item: T): void {
        const index = this.items.indexOf(item)
        if (index > -1) {
            this.items.splice(index, 1)
        }
    }

    getItemsByCondition(condition: (item: T) => boolean): T[] {
        return this.items.filter(condition)
    }
}