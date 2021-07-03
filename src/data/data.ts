const productCategories = [
    { id:1, name:'sport shoe'},
    { id:2, name:'shoe'},
    { id:5, name:'t shirt'},
    { id:4, name:'men shoe'},
    { id:7, name:'women shoe'},
    { id:8, name:'kid shoe'},
    { id:9, name:'clothes'},
    { id:10, name:'baby clothes'},
    { id:11, name:'men clothes'},
    { id:12, name:'women clothes'},
]

const productColors = [
    { id:1, color:'red'},
    { id:2, color:'blue'},
    { id:5, color:'yellow'},
]

const productSizes = [
    { id:1, size:'L'},
    { id:2, size:'M'},
    { id:5, size:'X'},
]

const profileActionButtons = [
    { id:1, name:'My Order'},
    { id:2, name:'My Cards'},
    { id:3, name:'Payments'},
    { id:5, name:'Change Email & Password'},
]


const products = [
    {id:1, name:'Black Shirt', caracteristics:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis qui nobis provident accusamus officia aspernatur natus dicta, perferendis temporibus rem nesciunt odit! Sit dolores mollitia libero? Dolores, assumenda explicabo?', price:49, isFavorite:true, image:require('../assets/images/bg1.jpg')},
    {id:2, name:'Black Shirt', caracteristics:'kjdf ldfjlsdfjsldfjs flsdfjlsfjsldfjskldfs dfslfjksldf sdfk', price:49, isFavorite:true, image:require('../assets/images/bg4.jpg')},
    {id:3, name:'Black Shirt', caracteristics:'kjdf ldfjlsdfjsldfjs flsdfjlsfjsldfjskldfs dfslfjksldf sdfk', price:49, isFavorite:true, image:require('../assets/images/img4.jpg')},
    {id:4, name:'Black Shirt', caracteristics:'kjdf ldfjlsdfjsldfjs flsdfjlsfjsldfjskldfs dfslfjksldf sdfk', price:49, isFavorite:true, image:require('../assets/images/img5.jpg')},
]




export {
    productCategories,
    products,
    productColors,
    productSizes,
    profileActionButtons
}