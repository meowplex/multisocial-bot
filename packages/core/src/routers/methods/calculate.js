import { evaluate } from 'mathjs'

export default function calculate (req, res) {
    let expression = req.query.expression;
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