// let product = document.querySelectorAll(".product")
// let cart = document.querySelectorAll(".cart")


const products = [
    {
      id: 1,
      name: 'Годинник чоловічий',
      price: 2500,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6814fbd90fd7a.png'
    },
    {
      id: 2,
      name: 'Годинник жіночий',
      price: 2200,
      image : 'https://learn.logikaschool.com/uploads/student/2415971/6814fc41ab2d2.png'
    },
    {
      id: 3,
      name: 'Годинник з металу',
      price: 3000,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6814fcab60c58.png'
    },
    {
      id: 4,
      name: 'Покривало IDEIA Cube двостороннє 240х210',
      price: 1200,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6816487484c5a.png'
    },
    {
      id: 5,
      name: 'Покривало ROSENTRE 160x220',
      price: 1500,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818e514d0300.png'
    },
    {
      id: 6,
      name: 'Рушник махровий для ванної 30x50 см',
      price: 80,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/68165005056ce.png'
    },
    {
      id: 7,
      name: 'Рушник махровий 65x130 см білий',
      price: 150,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6816507945bde.png'
    },
    {
      id: 8,
      name: 'Рушник махровий Темно-сірий 50х90 см',
      price: 120,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/681650d467120.png'
    },
    {
      id: 9,
      name: 'Свисток у вигляді пташки',
      price: 50,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6816528def5be.png'
    },
    {
      id: 10,
      name: "Магніт тришаровий дерев'яна карта Україна",
      price: 100,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/68165397166d7.png'
    },
    {
      id: 11,
      name: 'Патріотичний значок',
      price: 80,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/68165522eeaf7.png'
    },
    {
      id: 12,
      name: 'Кільце чоловіче 19мм(шир.=7мм)',
      price: 150,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818e87dc6fce.png'
    },
    {
      id: 13,
      name: "Кільце жіноче 18мм(шир.=24мм)",
      price: 140,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818e973f0e27.png'
    },
    {
      id: 14,
      name: "Бензинова запальничка",
      price: 120,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/68164600027d8.png'
    },
    {
      id: 15,
      name: "Електрична запальничка",
      price: 200,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/681646df18195.png'
    },
    {
      id: 16,
      name: "Газова запальничка",
      price: 90,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6816474db1f9d.png'
    },
    {
      id: 17,
      name: "Заколки для волося(3.1см)",
      price: 60,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818f31c265fc.png'
    },
    {
      id: 18,
      name: "Заколки з перлинами",
      price: 80,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818f3d119801.png'
    },
    {
      id: 19,
      name: "Заколка-краб для волося",
      price: 75,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818f492b5dbc.png'
    },
    {
      id: 20,
      name: "Жіночі сонцезахисні окуляри",
      price: 220,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818e65d0b786.png'
    },
    {
      id: 21,
      name: "Чоловічі сонцезахисні окуляри",
      price: 250,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818e70fb0cfb.png'
    },
    {
      id: 22,
      name: "Подарункова коробка прямокутна 33см*25.5см*14.5см",
      price: 180,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818ec649cae9.png'
    },
    {
      id: 23,
      name: "Подарункова коробка 9*9*5 см",
      price: 90,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818ed17cc6a7.png'
    },
    {
      id: 24,
      name: "Сережки об'ємні Краплі",
      price: 130,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818eddc42952.png'
    },
    {
      id: 25,
      name: "Сережки 'Конюшина'",
      price: 110,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818eec4a9bf8.png'
    },
    {
      id: 26,
      name: "Золоті сережки Герб України",
      price: 300,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818ef74c98c5.png'
    },
    {
      id: 27,
      name: "Парні вертикальні кулони",
      price: 160,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818ea85c4deb.png'
    },
    {
      id: 28,
      name: "Шкатулка для прикрас",
      price: 180,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/68164c4b78e94.png'
    },
    {
      id: 29,
      name: "Шкатулка для прикрас із замком",
      price: 210,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/68164bb27f3ea.png'
    },
    {
      id: 30,
      name: "Шкатулка із шкіри",
      price: 250,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/68164cca41ed0.png'
    },
    {
      id: 31,
      name: "Золотий жіночий браслет(розмір 170)",
      price: 2450,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818f5620ab97.png'
    },
    {
      id: 32,
      name: "Браслет з жовтим золотом",
      price: 2250,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818f6ceb8199.png'
    },
    {
      id: 33,
      name: "Комплект постільної білизни Lelit Полуторний 150х215 см",
      price: 1200,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818e2b023efc.png'
    },
    {
      id: 34,
      name: "Комплект постільної білизни Ardesto Полуторний Євро 160x220 см",
      price: 1500,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6818e346ab8fb.png'
    },
    {
      id: 35,
      name: "Металева попільниця",
      price: 150,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6816487484c5a.png'
    },
    {
      id: 36,
      name: "Скляна попільниця",
      price: 200,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/68164923ba570.png'
    },
    {
      id: 37,
      name: "Фарфорова попільниця",
      price: 250,
      image: 'https://learn.logikaschool.com/uploads/student/2415971/6816499e69bad.png'
    },
  ];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let item_name = document.querySelectorAll(".item_name")
// let price = document.querySelectorAll(".price")
let add_to_cart = document.querySelectorAll(".add_to_cart")
// let product_in_cart = document.querySelectorAll(".product_in_cart")
let cardItems = []
let search = document.querySelector(".search")

//   // Додавання товарів із каталогу в картку
function alternativeaddtoCart(){
  for (let i = 0; i < add_to_cart.length; i++) {
    add_to_cart[i].addEventListener("click", function() {
      const name = item_name[i].textContent;
      const id = products.find(p => p.name === name).id;
      const product = products.find(p => p.id === id);
      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      saveCart();
      // showNotification(`${product.name} додано в кошик`);
      renderCart();
      }
    )}}
  
    
    
    

function searchProducts() {
  const searchTerm = search.value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
  const container = document.getElementById('products');
  container.innerHTML = '';
  filteredProducts.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <p class="item_name">${p.name}</p>
      <p>Ціна: <span class="price">${p.price}</span> грн</p>
      <button class="add_to_cart" onclick="addToCart(${p.id})">Купити</button>`
    ;
    container.appendChild(el);
  });
}
if (search !== "") {
search.addEventListener("input", searchProducts);
}



//  function renderProducts() {
//   const container = document.getElementById('products');
//   container.innerHTML = '';
//   products.forEach(p => {
//     const el = document.createElement('div');
//     el.className = 'product';
//     el.innerHTML = `
//       <img src="${p.image}" alt="${p.name}">
//       <h3>${p.name}</h3>
//       <p>Ціна: ${p.price} грн</p>
//       <button onclick="addToCart(${p.id})">Купити</button>`
//     ;
//     container.appendChild(el);
//   });
// }

function renderCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>Кошик порожній.</p>';
    cartDiv.style.display = 'flex';
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      ${item.name} x${item.quantity} - ${item.price * item.quantity} грн
      <button onclick="removeFromCart(${item.id})">-</button>`
    ;
    
    cartDiv.appendChild(itemEl);
  });

  const totalEl = document.createElement('p');
  totalEl.innerHTML = `<strong>Загальна сума: ${total} грн</strong>`;
  cartDiv.appendChild(totalEl);
  document.getElementById('cart').innerHTML += `<button class="btn_submit" id="btn_submit" onclick="zamovlennya()">Замовити</button>`
  cartDiv.style.display = 'flex';
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  // showNotification(`${product.name} додано в кошик`);
  renderCart();
}

function removeFromCart(id) {
  const index = cart.findIndex(i => i.id === id);
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
  }
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function confirmOrder(){
  const form = document.getElementById('checkout-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    alert(`Дякуємо, ${name}! Ваше замовлення буде доставлено на адресу: ${address}.`);
    cart = [];
    saveCart();
    renderCart();
  });
}
// function showNotification(msg) {
//   const notif = document.getElementById('notification');
//   notif.textContent = msg;
//   notif.style.display = 'block';
//   setTimeout(() => notif.style.display = 'none', 2000);
// }

function zamovlennya(){
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  const zamovlennyaEl = document.createElement('div');
  zamovlennyaEl.className = 'zamovlennya';
  zamovlennyaEl.innerHTML = `
  <h1>Оплата замовлення</h1>
  <form id="checkout-form">
    <label for="name">Ім'я та прізвище</label><br />
    <input type="text" id="name" name="name" required /><br /><br />

    <label for="address">Адреса доставки</label><br />
    <input type="text" id="address" name="address" required /><br /><br />

    <label for="phone">Номер телефону</label><br />
    <input type="tel" id="phone" name="phone" required pattern="[0-9+\-\s]{7,15}" /><br /><br />

    <button type="submit" onclick="confirmOrder()">Отримати замовлення</button>
  </form>
`
  ;
  cartDiv.appendChild(zamovlennyaEl);
}

// renderProducts();
alternativeaddtoCart()

// const cart = document.getElementById('cart');
// const openCartBtn = document.getElementById('open-cart-btn');
// const closeCartBtn = document.getElementById('close-cart');
// const checkoutBtn = document.getElementById('checkout-btn');
// const cartItemsList = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');

// function searchbyname() {
//     let filter = search.value.toUpperCase();
//     let products = document.querySelectorAll(".product");
//     for (let i = 0; i < products.length; i++) {
//         let name = products[i].querySelector(".item_name").textContent;
//         if (name.toUpperCase().indexOf(filter) > -1) {
//             products[i].style.display = "";
//         } else {
//             products[i].style.display = "none";
//         }
//     }
// }
// if (search) {
//     search.addEventListener("keyup", searchbyname);
// }

// function updateCart() {
//     cartItemsList.innerHTML = '';
//     let total = 0;
//     cardItems.forEach(item => {
//       const li = document.createElement('li');
//       li.innerHTML = `
//         <span class="cart-item-name">${item.name}</span>
//         <span class="cart-item-price">₴${item.price}</span>
//         <button class="remove-item-btn" data-id="${item.name}" aria-label="Видалити товар">&times;</button>
//       `;
//       cartItemsList.appendChild(li);
//       total += +item.price;
//     });
//     cartTotal.textContent = `₴${total}`;
//     cart.style.display = 'block';
//   }

  
//   // Видалити товар з кошика
//   cartItemsList.addEventListener('click', (e) => {
//     if (e.target.classList.contains('remove-item-btn')){
//     for (let i = 0; i < cardItems.length; i++) {
//       if (cardItems[i].name === e.target.dataset.id) {
//         delete cardItems[i]
//         break
//       }
//     }
//       updateCart();
//     }})

  
//   // Відкриття/закриття кошика
//   openCartBtn.addEventListener('click', () => {
//     // cart.classList.remove('hidden');
//     cart.style.display = 'block';
//   });
  
//   closeCartBtn.addEventListener('click', () => {
//     // cart.classList.add('hidden');
//     cart.style.display = 'none';
//   });
  


//   // --- Кнопка Сплатити ---
//   checkoutBtn.addEventListener('click', () => {
//     window.location.href = 'checkout.html';
//   });
