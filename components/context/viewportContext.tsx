import React, { useState, useEffect, FC, Dispatch, SetStateAction } from 'react'

type ViewPort = {
    width: number,
    height: number
} | null

type ViewPortContext = [
    viewport: ViewPort,
    setViewport: Dispatch<SetStateAction<ViewPort | null>>
]

const ViewportContext = React.createContext<ViewPortContext | null>(null)


const Provider: FC = () => {
    const [viewport, setViewport] = useState<ViewPort | null>(null)
    window.addEventListener('resize', () => {
        setViewport({
            width: window.innerWidth,
            height: window.innerHeight
        })
    })
    return (
        <ViewportContext.Provider value={[viewport, setViewport]}>
        </ViewportContext.Provider >
    )
}

export default Provider
