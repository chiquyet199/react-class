const data = [
  {
    id:1,
    name: 'SamSung Galaxy A1',
    img:
      'https://cdn.tgdd.vn/Products/Images/42/192003/TimerThumb/samsung-galaxy-a9-2018-laodong.jpg',
    price: 8990000,
    oldPrice: 12490000,
    unit: 'VND',
    promotion: 'Thu cũ đổi mới tiết kiệm đến 12.5 triệu',
  },
  {
    id:2,
    name: 'Nokia 6.1 Plus',
    img:
      'https://cdn.tgdd.vn/Products/Images/42/167150/TimerThumb/nokia-61-plus-gioto.jpg',
    price: 4790000,
    oldPrice: 5990000,
    unit: 'VND',
    promotion: 'Tặng phiếu mua hàng',
  },
  {
    id:3,
    name: 'SamSung Galaxy A7',
    img:
      'https://cdn.tgdd.vn/Products/Images/42/111107/TimerThumb/samsung-galaxy-a7-2018-blue-laodong.jpg',
    price: 200,
    oldPrice: 300,
    unit: 'USD',
  },
  {
    id:4,
    name: 'SamSung Galaxy M20',
    img: (src =
      'https://cdn.tgdd.vn/Products/Images/42/195314/TimerThumb/samsung-galaxy-m20-laodong.jpg'),
    price: 4990000,
    unit: 'VND',
    promotion: 'Thu cũ đổi mới tiết kiệm đến 12.5 triệu',
  },
  {
    id:5,
    name: 'iPhone 8 Plus 64Gb',
    img:
      'https://cdn.tgdd.vn/Products/Images/42/114110/TimerThumb/iphone-8-plus-laodong.jpg',
    price: 20990000,
    unit: 'VND',
  },
]
const cartIds = []
let total = 0
const currentcyMapping = {
  USD: '$',
  VND: 'đ',
}

const format = function(number) {
  var f = (number + '').split('').reverse()
  var length = f.length
  var gap = 0
  for (var i = 0; i < length; i += 3) {
    if (i > 0) {
      f.splice(i + gap, 0, ',')
      gap++
    }
  }
  return f.reverse().join('')
}

const createLiTag = function(item) {
  const newLiTag = document.createElement('li')
  newLiTag.className = 'product'
  newLiTag.innerHTML = `
    <img height="180px" src="${item.img}"/>
    <h3>${item.name}</h3>
    <p class="price">
      <span class="new">${format(item.price)}${
    currentcyMapping[item.unit]
  }</span>
      ${
        item.oldPrice
          ? `<span class="old">${format(item.oldPrice)}${
              currentcyMapping[item.unit]
            }</span>`
          : ''
      }
    </p>
    ${
      item.promotion
        ? `<p class="promotion">${item.promotion}</p>`
        : ''
    }
    <button class="add">Add to cart</button>
  `
  newLiTag.setAttribute('data-id', item.id)
  newLiTag.setAttribute('data-name', item.name)
  newLiTag.setAttribute('data-price', item.price)
  return newLiTag
}

const allLiTags = data.map(createLiTag)
const ulTag = document.querySelector('.product-list')
allLiTags.forEach(function(li) {
  ulTag.append(li)
})

const addButtons = document.querySelectorAll('.add')
const onButtonClick = function(event) {
    const cartsEl = document.querySelector('.cart')
    const clickedButton = event.target
    const liEl = clickedButton.parentElement
    const createNewCartItem = function(cartItem){
      const newCartItemEl = document.createElement('div')
      newCartItemEl.className = 'cart-item'
      newCartItemEl.innerHTML = `
        <p>Name: ${cartItem.name}</p>
        <p>Price: ${cartItem.price}</p>
        <p>Quantity: <span class="quantity">1</span></p>
      `
      newCartItemEl.setAttribute('data-id', cartItem.id)
      cartsEl.append(newCartItemEl)
      cartIds.push(cartItem.id)
      total += Number(cartItem.price)
    }
    const increaseQuantity = function(item){
      const selector = `.cart-item[data-id="${item.id}"]`
      const cartEl = document.querySelector(selector)
      const quantityEl = cartEl.querySelector('.quantity')
      quantityEl.innerHTML = +quantityEl.innerHTML + 1
      total += Number(item.price)
    }
    const updateTotal = function(){
      const totalEl = document.querySelector('.total')
      totalEl.innerHTML = format(total)
    }
    const newCartItem = {
      id:liEl.getAttribute('data-id'),
      name: liEl.getAttribute('data-name'),
      price: liEl.getAttribute('data-price'),
    }
    if(cartIds.includes(newCartItem.id)){
      increaseQuantity(newCartItem)
    }else{
      createNewCartItem(newCartItem)
    }
    updateTotal()
  }
const bindOnClickHandler = function(addButton) {
  addButton.addEventListener('click', onButtonClick)
}

addButtons.forEach(bindOnClickHandler)