///// Function Display Tree //////

function displayTree (tree) {
    console.group(tree.value)
    for (let child of tree.children) {
        displayTree(child)
    }
    console.groupEnd();
}


///// My Tree /////

let myTree = {
    value:"a", children: [
        {value:"aa", children: [
            {value:"aaa", children: [
                {value:"aaaa", children: []},
                {value:"aaab", children: []}
            ]},
            {value:"aab", children: [
                {value:"aaba", children: []},
                {value:"aabb", children: []},
                {value:"aabb", children: []}
            ]},
            {value:"aac", children: [
                {value:"aaca", children: []}
            ]},
            {value:"aad", children: [
                {value:"aada", children: []},
                {value:"aadb", children: []},
                {value:"aadc", children: []},
                {value:"aadd", children: []}
            ]}
        ]},

        {value:"ab", children: [
            {value:"aba", children: [
                {value:"abaa", children: []},
                {value:"abab", children: []}
            ]},
            {value:"abb", children: [
                {value:"abba", children: []},
                {value:"abbb", children: []},
                {value:"abbc", children: []}
            ]}
        ]},

        {value:"ac", children: [
            {value:"aca", children: [
                {value:"acaa", children: []},
                {value:"acab", children: []},
                {value:"acac", children: []},
                {value:"acad", children: []}
            ]},
            {value:"acb", children: [
                {value:"acba", children: []},
                {value:"acbb", children: []},
                {value:"acbc", children: []},
                {value:"acbd", children: []}
            ]},
            {value:"acc", children: [
                {value:"acca", children: []},
                {value:"accb", children: []},
                {value:"accc", children: []},
                {value:"accd", children: []}
            ]}
        ]}
    ]
};


///// Display Tree /////

displayTree(myTree);
