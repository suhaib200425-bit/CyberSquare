import { create } from 'zustand'

const useStore = create((set) => ({
    leftMenu: 'Dashboard',
    ActiveLeftMenu:false,
    SetleftMenu: (Menu) => set(() => ({ leftMenu: Menu })),
    SetActiveLeftMenu:() => set((state) => ({ ActiveLeftMenu: !state.ActiveLeftMenu }))
}))

export default useStore