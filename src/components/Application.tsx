import { useState } from 'react'
import ChildComponent from '@/components/ChildComponent'

export default function Application() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite Starter Template</h1>
      <div>
        <button
          className="bg-cyan-500 text-white px-2 py-1"
          onClick={() => setCount((count) => count + 1)}
        >
          Increase
        </button>

        <ChildComponent count={count} />
      </div>
    </>
  )
}
