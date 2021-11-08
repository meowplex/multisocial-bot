export default function get_views(req) {
    if (req.session.views) {
        req.session.views++;
    } else {
        req.session.views = 1;
    }
    return { text: `Views: ${req.session.views}` };
}
