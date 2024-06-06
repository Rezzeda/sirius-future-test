import { decrement, increment } from '../../services/counterSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/appHooks'
import { counterSelector } from '../../services/selectors'

export function Counter() {
    const count = useAppSelector(counterSelector)
    const dispatch = useAppDispatch()

    return (
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >
            Increment
            </button>
            <span>{count}</span>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
            Decrement
            </button>
        </div>
    )
}