import { useEffect, useState, useRef } from 'react'

const useSearch = (searchKey = "", isForceStop = false) => {
    // States
    const [previewSearch] = useState(['Antalya, Kaş', 'Muğla, Bodrum', 'Muğla, Marmaris', 'Balıkesir, Akçay', 'Antalya, Alanya', 'Aydın', 'İzmir, Çeşme', 'Muğla, Datça'])
    const [placeholder, setPlaceholder] = useState("Nereye?")
    const [isClicked, setIsClicked] = useState(false)
    // Ref
    const previewCharIndex = useRef(0)
    const previewIndex = useRef(0)
    const timer = useRef(null)

    useEffect(() => {
        if (isClicked || isForceStop) {
            if (timer.current !== null) clearTimeout(timer.current)
            setPlaceholder("")
        } else {
            timer.current = setTimeout(() => {
                start()
            }, 500)
        }

        return () => {
            if (timer.current !== null) clearTimeout(timer.current)
        }
    }, [isClicked, isForceStop])

    const typeWriting = () => {
        if (previewCharIndex.current < previewSearch[previewIndex.current].length) {
            const char = previewSearch[previewIndex.current].charAt(previewCharIndex.current)
            previewCharIndex.current++
            setPlaceholder(prev => {
                return prev + char
            })
            timer.current = setTimeout(typeWriting, 100)
        } else {
            timer.current = setTimeout(() => {
                start()
            }, 1000)
        }
    }

    const start = () => {
        previewIndex.current = previewIndex.current == previewSearch.length - 1 ? 0 : previewIndex.current + 1
        previewCharIndex.current = 0
        setPlaceholder("")
        typeWriting()
    }

    const onFocus = () => {
        setIsClicked(true)
    }

    const onBlur = () => {
        if (!searchKey) setIsClicked(false)
    }

    return [placeholder, onFocus, onBlur]
}

export default useSearch