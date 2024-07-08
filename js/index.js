var productNameInputs = document.getElementById('productName');
var productPriceInputs = document.getElementById('productPrice');
var productCategoryInputs = document.getElementById('productCategory');
var productDescriptionInputs = document.getElementById('productDescription');
var productContainer = [];
var updateBtn = document.getElementById('updateBtn');
var addBtn = document.getElementById('addBtn');
var modal = document.getElementById('modal')
var closeBtn = document.querySelector('.fa-xmark')



closeBtn.addEventListener('click', function () {
    modal.classList.replace('d-flex', 'd-none')
})



if (localStorage.getItem('products') == null) {
    productContainer = [];
}

else {
    productContainer = JSON.parse(localStorage.getItem('products'))
    displayProduct();
}



function addProduct() {
    var product = {
        name: productNameInputs.value,
        price: productPriceInputs.value,
        category: productCategoryInputs.value,
        description: productDescriptionInputs.value,
    }
    if (check()) {
        productContainer.push(product)
    }
    else {
        modal.classList.replace('d-none','d-flex')
    }
    localStorage.setItem('products', JSON.stringify(productContainer))
    clearForm()
    displayProduct()
}


function clearForm() {
    productNameInputs.value = null;
    productPriceInputs.value = null;
    productCategoryInputs.value = null;
    productDescriptionInputs.value = null;


    productNameInputs.classList.remove('is-valid', 'is-invalid')
    productPriceInputs.classList.remove('is-valid', 'is-invalid')
    productCategoryInputs.classList.remove('is-valid', 'is-invalid')
    productDescriptionInputs.classList.remove('is-valid', 'is-invalid')

}

function displayProduct() {
    var box = ''
    for (var i = 0; i < productContainer.length; i++) {
        box += ` <tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td><button  onclick="setProduct(${i})" class="btn btn-outline-info">Update</button></td>
            <td><button onclick="deleteProduct(${i})"  class="btn btn-outline-danger">Delete</button></td>
          </tr > `
    }
    document.getElementById('tableData').innerHTML = box;
}



function deleteProduct(deletedIndex) {
    productContainer.splice(deletedIndex, 1)
    localStorage.setItem('products', JSON.stringify(productContainer))
    displayProduct();
}



function searchProduct(term) {
    var box = '';
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            box += `<tr>
                <td>${i}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].description}</td>
                <td><button onclick="setProduct(${i})" class="btn btn-outline-info">Update</button></td>
                <td><button onclick="deleteProduct(${i})"  class="btn btn-outline-danger">Delete</button></td>
              </tr> `
        }
    }
    document.getElementById('tableData').innerHTML = box;

}


var zzz;
function setProduct(params) {
    zzz = params;
    productNameInputs.value = productContainer[params].name;
    productPriceInputs.value = productContainer[params].price;
    productCategoryInputs.value = productContainer[params].category;
    productDescriptionInputs.value = productContainer[params].description;

    updateBtn.classList.remove('d-none');
    addBtn.classList.add('d-none');
}



function updateProduct(zzz) {
    productContainer[zzz].name = productNameInputs.value;
    productContainer[zzz].price = productPriceInputs.value;
    productContainer[zzz].category = productCategoryInputs.value;
    productContainer[zzz].description = productDescriptionInputs.value;
    displayProduct()
    clearForm()
    updateBtn.classList.add('d-none');
    addBtn.classList.remove('d-none');
    localStorage.setItem('products', JSON.stringify(productContainer))
}









function validationInputs(element) {
    var regex = {
        productName: /^[A-Z][a-z]{2,8}$/,
        productPrice: /^[1-9][0-9][0-9]$/,
        productCategory: /^(Tv|laptop|screens|Electronics|Mobile)/,
        productDescription: /^(Good|veryGood|Excellent)/
    }
    if (regex[element.id].test(element.value) == true) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        element.nextElementSibling.classList.replace('d-block', 'd-none')


    }
    else {
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        element.nextElementSibling.classList.replace('d-none', 'd-block')
    }
}

function check() {
    if (productNameInputs.value != ''
        && productPriceInputs != ''
        && productCategoryInputs != ''
        && productDescriptionInputs != '') {
        return true
    }
    else {
        return false
    }
}





var arr = [
    { name: 'apple', price: 4155, category: 'tv', description: 'good' },
    { name: 'tornado', price: 4155, category: 'tv', description: 'good' },
    { name: 'nokia', price: 4155, category: 'tv', description: 'good' },
    { name: 'tsohiba', price: 4155, category: 'tv', description: 'good' },
    { name: 'dell', price: 4155, category: 'tv', description: 'good' },
    { name: 'lenovo', price: 4155, category: 'tv', description: 'good' },
]


// console.log('web design and development'.toLowerCase().includes('and'.toLowerCase()));



