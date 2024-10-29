import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/app/store'

// Usar esse hook no lugar de `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch
