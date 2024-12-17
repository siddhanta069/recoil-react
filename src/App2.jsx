import { RecoilRoot } from 'recoil'
import { counterAtom, currentCountSelector } from './store/atoms/counter'
import { useRecoilValue, useSetRecoilState } from 'recoil' 


function App2() {

    return (
        <RecoilRoot>
            <Button/>
            <Counter/>
            <IsEven/>
        </RecoilRoot>
    )
}

function Button() {

    const setCount = useSetRecoilState(counterAtom)
    
    function increase() {
        setCount(c => c + 2)
    }

    function decrease() {
        setCount(c => c - 1)
    }


    return (
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
          
    )
        
}
        
function Counter() {
    const count = useRecoilValue(counterAtom)
    return (
        <div>
            {count}
        </div>
    )
}

function IsEven() {

    const isEven = useRecoilValue(currentCountSelector)

    return (
        <div>
            {isEven ? "EVEN" : "ODD"}
        </div>
    )
}


export default App2;