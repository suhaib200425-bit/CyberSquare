import { create } from 'zustand'

const useStore = create((set) => ({
  user: null,
  setUser: (logedUser) => set((state) => ({ user: state.user=logedUser })),
}))

export default useStore