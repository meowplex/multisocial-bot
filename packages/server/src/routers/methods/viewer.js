export default function get_views(req, res) {
    req.session.views = req.session.views ?? 0
    req.session.views++
    res.json({ text: `Views: ${req.session.views}` })
}
