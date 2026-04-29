import { create } from 'zustand'

const useStore = create((set) => ({
    user: null,
    SetUser: (user) => set(() => ({ user: user }))
}))

export default useStore