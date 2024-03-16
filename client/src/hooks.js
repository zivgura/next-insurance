import { useCallback, useRef } from 'react';

export function useHookWithRefCallback(action) {
    const ref = useRef(null)
    const setRef = useCallback(node => {
        if (node) {
            action(node)
        }
        ref.current = node
    }, [action])

    return [setRef]
}
