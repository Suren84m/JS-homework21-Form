let direction = [
    {
        id: 1,
        region: "Արագածոտն",
        cities: ['Աշտարակ', 'Ապարան', 'Թալին']
    },
    {
        id: 2,
        region: "Արարատ",
        cities: ['Արտաշատ', 'Մասիս', 'Վեդի']
    },
    {
        id: 3,
        region: "Արմավիր",
        cities: ['Էջմիածին', 'Արմավիր', 'Մեծամոր']
    },
    {
        id: 4,
        region: "Գեղարքունիք",
        cities: ['Գավառ', 'Սևան', 'Մարտունի']
    },
    {
        id: 5,
        region: "Կոտայք",
        cities: ['Աբովյան', 'Հրազդան', 'Չարենցավան']
    },
    {
        id: 6,
        region: "Լոռի",
        cities: ['Վանաձոր', 'Ալավերդի', 'Ստեփանավան']
    },
    {
        id: 7,
        region: "Շիրակ",
        cities: ['Գյումրի', 'Արթիկ', 'Մարալիկ']
    },
    {
        id: 8,
        region: "Սյունիք",
        cities: ['Կապան', 'Գորիս', 'Մեղրի']
    },
    {
        id: 9,
        region: "Տավուշ",
        cities: ['Իջևան', 'Դիլիջան', 'Բերդ']
    },
    {
        id: 10,
        region: "Վայոց ձոր",
        cities: ['Եղեգնաձոր', 'Ջերմուկ', 'Վայք']
    },
    {
        id: 11,
        region: "Երևան",
        cities: ['Աջափնյակ', 'Ավան', 'Դավթաշեն', 'Էրեբունի', 'Քանաքեռ-Զեյթուն', 'Կենտրոն', 'Մալաթիա-Սեբաստիա', 'Շենգավիթ']
    },
];
let selectRegion = document.getElementById("region");
let selectCity = document.getElementById("cities");
let cityOption;
selectRegion.addEventListener("click", function () {
    selectCity.innerHTML = '';
    if (selectRegion.value) {
        direction.forEach(direction => {
            if (direction.region === selectRegion.value) {
                direction.cities.forEach(city => {
                    cityOption = document.createElement("option");
                    cityOption.textContent = `${city}`;
                    selectCity.append(cityOption);
                })
            }
        })
    }
});

let selectName = document.getElementById("name");
let selectSurname = document.getElementById("surname");
let selectSubmit = document.getElementById("submit");
let result = document.getElementById("result");
let i = 1;
selectSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    let mainDiv = document.createElement("div");
    let createLine1 = document.createElement("span");
    let createLine2 = document.createElement("span");
    let createLine3 = document.createElement("span");
    let createLine4 = document.createElement("span");
    let createLine5 = document.createElement("span");
    mainDiv.className = "style";
    createLine1.className = "style1";
    createLine2.className = "style1";
    createLine3.className = "style1";
    createLine4.className = "style1";
    createLine5.className = "style1";
    result.append(mainDiv);
    mainDiv.append(createLine1);
    mainDiv.append(createLine2);
    mainDiv.append(createLine3);
    mainDiv.append(createLine4);
    mainDiv.append(createLine5);
    createLine1.append(i);
    createLine2.append(`${selectRegion.value}ի մարզ`);
    createLine3.append(`${selectCity.value}`);
    createLine4.append(selectName.value);
    createLine5.append(selectSurname.value);
    i++;
})

