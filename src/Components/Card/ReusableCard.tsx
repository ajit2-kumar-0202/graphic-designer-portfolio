import { CSSProperties, memo } from "react"
import "./Card.css"
type ReuseableCardProps = {
    style?:CSSProperties
}

const ReuseableCard:React.FC<ReuseableCardProps> = memo(() => {
 return <>
    <div className="card">
        <span className="border-top-left"></span>
        <span className="border-top-right"></span>
        <span className="border-bottom-left"></span>
        <span className="border-bottom-left"></span>
    </div>
 </>   
})

export default ReuseableCard;