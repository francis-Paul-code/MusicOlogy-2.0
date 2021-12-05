import create from 'zustand';

export const useProgressStore = create((set: any)=> ({
  isAnimating: false,
  setIsAnimating: (isAnimating:any) => set(() => ({ isAnimating })),
}));
