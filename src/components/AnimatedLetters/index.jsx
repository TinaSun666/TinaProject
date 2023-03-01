import './index.scss';


const AnimatedLetters =({strArray, startIdx})=>{
    return(
        <span>
            {strArray.map((char, i)=>{
                return(
                    <span key={i} className={`text-animate idx-${i + startIdx}`}>{char}</span>
                );

            })}

        </span>

    );
}

export default AnimatedLetters;