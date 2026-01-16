import sanitizeHtml from "sanitize-html";

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
}
export function toUpperCase(str: string) {
    return str.toUpperCase();
}

export const cleanHtmlContent = (content: string) => sanitizeHtml(content, {
    allowedTags: [
        "p",
        "br",
        "strong",
        "em",
        "ul",
        "ol",
        "li",
        "blockquote"
    ],
    allowedAttributes: {}
});