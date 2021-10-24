const type = "website";
const url = "https://www.urbontaitis.lt";
const title = "Mindaugas Urbontaitis personal blog";
const description = "Articles focused on the traveling, cycling and coding.";
const mainImage = "/assets/blog/TV_bokstas.jpg";

export default (meta) => {
    return [
        {
            hid: "description",
            name: "description",
            content: (meta?.description) || description,
        },
        {
            hid: "og:type",
            property: "og:type",
            content: (meta?.type) || type,
        },
        {
            hid: "og:url",
            property: "og:url",
            content: (meta?.url) || url,
        },
        {
            hid: "og:title",
            property: "og:title",
            content: (meta?.title) || title,
        },
        {
            hid: "og:description",
            property: "og:description",
            content: (meta?.description) || description,
        },
        {
            hid: "og:image",
            property: "og:image",
            content: (meta?.mainImage) || mainImage,
        },
        {
            hid: "twitter:url",
            name: "twitter:url",
            content: (meta?.url) || url,
        },
        {
            hid: "twitter:title",
            name: "twitter:title",
            content: (meta?.title) || title,
        },
        {
            hid: "twitter:description",
            name: "twitter:description",
            content: (meta?.description) || description,
        },
        {
            hid: "twitter:image",
            name: "twitter:image",
            content: (meta?.mainImage) || mainImage,
        },
    ];
};