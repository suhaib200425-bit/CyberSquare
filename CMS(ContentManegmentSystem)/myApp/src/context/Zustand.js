import { create } from 'zustand'

const useStore = create((set) => ({
    user: null,
    category:null,
    SetUser: (user) => set(() => ({ user: user })),
    SetCategory: (category) => set(() => ({ category: category }))
}))

export default useStore