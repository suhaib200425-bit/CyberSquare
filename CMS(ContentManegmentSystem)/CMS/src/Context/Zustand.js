import { create } from 'zustand'

const useStore = create((set) => ({
    leftMenu: 'Dashboard',
    ActiveLeftMenu:false,
    BuilderPage:null,
    user: null,
    SetUser: (user) => set(() => ({ user: user })),
    SetBuilderPage: (page) => set(() => ({ BuilderPage: page })),
    SetleftMenu: (Menu) => set(() => ({ leftMenu: Menu })),
    SetActiveLeftMenu:() => set((state) => ({ ActiveLeftMenu: !state.ActiveLeftMenu }))
}))

export default useStore