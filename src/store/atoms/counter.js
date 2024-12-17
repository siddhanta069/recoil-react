import { atom, selector } from 'recoil'

export const counterAtom = atom({
    key: 'counter',
    default: 0
})

export const currentCountSelector = selector({
    key: 'isEvcen',
    get: ({get}) => {
        const currentCount = get(counterAtom)
        const isEvenCounter = (currentCount % 2 == 0)

        return isEvenCounter
    }
})