let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

let choosedGlasses = 0;

display(dataGlasses);

function display(data) {
    let output = data.reduce((result, item) => {
        return (
            result +
            `
                <div class="vglasses__items" style="background-image: url('${item.src}');" onclick="chooseGlasses('${item.id}')"></div>
            `
        );
    }, "");

    dom("#vglassesList").innerHTML = output;
}

function chooseGlasses(id) {
    choosedGlasses = 1;
    const glasses = dataGlasses.filter ( (item) => {
        return item.id == id
    })[0];

    const virtualImg = `<img src="${glasses.virtualImg}" alt="">`;
    dom("#avatar").innerHTML = virtualImg;
    
    const glassesInfo = `
        <p class="brand">${glasses.brand} (${glasses.color})</p>
        <p class="price">${glasses.price}$</p> <span class="stocking">Socking</span>
        <p class="description">
            ${glasses.description} 
        </p>
    `;

    dom("#glassesInfo").innerHTML = glassesInfo;

    dom("#glassesInfo").style.display = "block";
}

function removeGlasses(type) {
    if(choosedGlasses == 0) {
        alert('Bạn chưa chọn kính, vui lòng chọn kính!');
    }
    if(type == true) {
        dom("#avatar img").style.display = "block";
    } else if(type == false) {
        dom("#avatar img").style.display = "none";
    }
}

// =================== helper ========================
function dom(selector) {
    return document.querySelector(selector);
}
