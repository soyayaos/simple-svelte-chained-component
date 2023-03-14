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
            title: 'item 1-1',
            id: 1,
            selected: true,
        },
        {
            price: 200,
            title: 'item 1-2',
            id: 2,
        },
        {
            price: 300,
            title: 'item 1-3',
            id: 3,
        }
    ],
    [
        {
            price: 10,
            title: 'item 2-1',
            id: 1,
            parent: 1,
        },
        {
            price: 20,
            title: 'item 2-2',
            id: 2,
            parent: 1,
        },
        {
            price: 30,
            title: 'item 2-3',
            id: 3,
            parent: 2,
        },
        {
            price: 40,
            title: 'item 2-4',
            id: 4,
            parent: 2,
        },
        {
            price: 50,
            title: 'item 2-5',
            id: 5,
            parent: 3,
        },
        {
            price: 60,
            title: 'item 2-6',
            id: 6,
            parent: 3,
        },
    ],
    [
        {
            price: 1,
            title: 'item 3-1',
            id: 1,
            parent: 1,
        },
        {
            price: 2,
            title: 'item 3-2',
            id: 2,
            parent: 1,
        },
        {
            price: 3,
            title: 'item 3-3',
            id: 3,
            parent: 2,
        },
        {
            price: 4,
            title: 'item 3-4',
            id: 4,
            parent: 3,
        },
        {
            price: 5,
            title: 'item 3-5',
            id: 5,
            parent: 4,
        },
        {
            price: 6,
            title: 'item 3-6',
            id: 6,
            parent: 5,
        },
        {
            price: 7,
            title: 'item 3-7',
            id: 7,
            parent: 6,
        },
        {
            price: 8,
            title: 'item 3-8',
            id: 8,
            parent: 6,
        },
        {
            price: 9,
            title: 'item 3-9',
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
