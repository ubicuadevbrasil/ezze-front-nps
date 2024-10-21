import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'

// Usar esse hook no lugar de `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch
