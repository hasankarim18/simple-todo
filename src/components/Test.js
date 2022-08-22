import React from 'react'

const Test = () => {
    const libraries = [
        {
            id: 1,
            title: "React",
            created: 2013,
        },
        {
            id: 2,
            title: "Vue",
            created: 2014,
        },
        {
            id: 3,
            title: "Svelte",
            created: 2016,
        },
    ];

    const result = libraries.filter((lib) => lib.created > 2015);

    result[0].title = "Laravel";
    console.log('redult', result[0]);
    console.log('liberies', libraries[2].title);
    return (
        <div>Test</div>
    )
}

export default Test