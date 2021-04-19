
export default function selectionFilter({ series, films } = []) {
    return {
        series: [
            { title: 'Documentaires', data: series?.filter((item) => item.genre === 'documentaries') },
            { title: 'Comedy', data: series?.filter((item) => item.genre === 'comedies') },
            { title: 'Kinderen', data: series?.filter((item) => item.genre === 'children') },
            { title: 'Misdaad', data: series?.filter((item) => item.genre === 'crime') },
            { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
        ],
        films: [
            { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
            { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
            { title: 'Kinderen', data: films?.filter((item) => item.genre === 'children') },
            { title: 'Spannende Films', data: films?.filter((item) => item.genre === 'suspense') },
            { title: 'Romantiek', data: films?.filter((item) => item.genre === 'romance') },
        ],
    };
}