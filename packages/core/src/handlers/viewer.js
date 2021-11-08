export default function get_views(req, res) {
    if (req.session.views) {
        req.session.views++;
    } else {
        req.session.views = 1;
    }
    res.json({ text: `Views: ${req.session.views}` })
}
