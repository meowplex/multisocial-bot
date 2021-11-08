import { evaluate } from 'mathjs'

export default function calculate (req, res) {
    let expression = req.query.text.split(" ").splice(1).join(" ");
    try {
        let answer = evaluate(expression)
        res.json({
            text: answer.toString()
        })
        return;
    } catch (error) {
        res.json({
            text: error.toString()
        })
        return;
    }
    
}