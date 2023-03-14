import { get, writable } from "svelte/store";

export type Item = {
    price: number,
    title: string,
    id: number,
    parent?: number,
    level?: number,
    selected?: boolean,
}

const data: Item[][] = [
    [
        {
            price: 100,
            title: 'Notebook',
            id: 1,
            selected: true,
        },
        {
            price: 200,
            title: 'Tablet',
            id: 2,
        },
        {
            price: 300,
            title: 'Phone',
            id: 3,
        }
    ],
    [
        {
            price: 10,
            title: "15.6'",
            id: 1,
            parent: 1,
        },
        {
            price: 20,
            title: "17'",
            id: 2,
            parent: 1,
        },
        {
            price: 30,
            title: "10'",
            id: 3,
            parent: 2,
        },
        {
            price: 40,
            title: "11'",
            id: 4,
            parent: 2,
        },
        {
            price: 50,
            title: "4.5'",
            id: 5,
            parent: 3,
        },
        {
            price: 60,
            title: "5.5'",
            id: 6,
            parent: 3,
        },
    ],
    [
        {
            price: 1,
            title: '8 Gb RAM',
            id: 1,
            parent: 1,
        },
        {
            price: 2,
            title: '12 Gb RAM',
            id: 2,
            parent: 1,
        },
        {
            price: 3,
            title: '16 Gb RAM',
            id: 3,
            parent: 2,
        },
        {
            price: 4,
            title: '8 Gb RAM',
            id: 4,
            parent: 3,
        },
        {
            price: 5,
            title: '12 Gb RAM',
            id: 5,
            parent: 4,
        },
        {
            price: 6,
            title: '16 Gb RAM',
            id: 6,
            parent: 5,
        },
        {
            price: 7,
            title: '8 Gb RAM',
            id: 7,
            parent: 6,
        },
        {
            price: 8,
            title: '12 Gb RAM',
            id: 8,
            parent: 6,
        },
        {
            price: 9,
            title: '16 Gb RAM',
            id: 9,
            parent: 6,
        },
    ],
]

export const store = writable([])

export const init = () => {
    // @ts-ignore
    store.set(data[0].map((item) => {
        item.level = 0
        return item
    }))
    route(0, 1)
}

export const route = (level: number, id: number) => {
    let current: Item[] = get(store)
    console.log(level, id, current)
    current = current.filter((item) => {
        // @ts-ignore
        return item.level <= level
    }).map((item) => {
        if (item.level === level) {
            item.selected = item.id === id
            // @ts-ignore
        } else if (item.level > level) {
            item.selected = false
        }
        return item
    })
    if (data[level + 1]) {
        current = [...current, ...data[level + 1].filter((item) => {
            item.level = level + 1
            item.selected = false
            return item.parent === id
        })]
    }
    // @ts-ignore
    store.set(current)
}

export {}
