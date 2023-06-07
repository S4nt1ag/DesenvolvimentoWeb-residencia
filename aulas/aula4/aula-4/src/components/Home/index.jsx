import { useState } from 'react';
import '../Style.css'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1) }>contador {count}</button>
        </div>
    )
}

export default Home;