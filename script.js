let products = [
    {
      id : 1 ,
      product_name: "Gold Coin",
      product_price: "112.55",
      product_image: "./images/gold-coin.JPG",
    },
    {
      id : 2 ,
      product_name: "Silver Coin",
      product_price: "56.25",
      product_image: "./images/silver-coin.JPG",
    },
    {
      id : 3 ,
      product_name: "Diamond Ring",
      product_price: "900.00",
      product_image: "./images/diamond-ring.JPG",
    },
    {
      id : 4 ,
      product_name: "Pearl Necklace",
      product_price: "320.00",
      product_image: "./images/pearl-necklace.JPG",
    },
    {
      id : 5 ,
      product_name: "Platinum Watch",
      product_price: "250.50",
      product_image: "./images/platinum-watch.JPG",
    },
    {
      id : 6,
      product_name: "Ruby Earrings",
      product_price: "410.75",
      product_image: "./images/ruby-earrings.JPG",
    }
]
let myCart = []
let start = 0

let container = document.querySelector('.quick-view-modal')
let count = document.getElementById('cart-count')
let sideBarLeft = document.getElementById("data")
let sibarBody = document.getElementById('mySidebar')


count.innerText = start

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productDiv = document.createElement('div');
    const productImage = document.createElement('img');
    productImage.src = product.product_image;
    const productDesc = document.createElement('p');
    productDesc.textContent = product.product_name;
    const productPrice = document.createElement('p');
    productPrice.textContent = product.product_price;
    const div = document.createElement('div')
    div.classList.add('btns')
    const productCart = document.createElement('button');
    productCart.textContent = "Buy";
    productCart.classList.add('buy')
    productCart.id = product.id
    const productReview = document.createElement('button');
    productReview.textContent = 'View';
    productReview.classList.add('View')
    productReview.id  = product.id * 100
    productDiv.appendChild(productImage);
    productDiv.appendChild(productDesc);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(div);
    div.appendChild(productCart)
    div.appendChild(productReview)
    container.appendChild(productDiv);
  }

 let addProduct = document.querySelectorAll('.buy')

 addProduct.forEach((button)=> {
      button.addEventListener('click', ()=> {
        if(button.innerHTML == 'Buy'){
            start ++
            count.innerText = start
            button.innerHTML = 'Remove'
            button.style.background = 'red'
            const findObject = products.find(obj => obj.id == button.id);
            myCart.push(findObject)
            sideBarLeft.innerHTML = ``
            for (let i = 0; i < myCart.length; i++) {
              const product = myCart[i];
              let productImg = document.createElement('img')
                productImg.src = product.product_image
                productImg.id = product.id
              let productP = document.createElement('p')
                productP.innerText = product.product_name
              let productPrice = document.createElement('p')
              productPrice.innerText = product.product_price
              sideBarLeft.appendChild(productImg)
              sideBarLeft.appendChild(productP)
              sideBarLeft.appendChild(productPrice)
            }
        }else{
            start --
            count.innerText = start
            button.innerHTML = 'Buy'
            button.style.background = '#4CAF50'
            sideBarLeft.innerHTML = `` 
            const objToRemove = myCart.findIndex(obj => obj.id == button.id)
            myCart.splice(objToRemove, 1)
            for (let i = 0; i < myCart.length; i++) {
              const product = myCart[i];
              let productDiv = document.createElement('div')
              let productImg = document.createElement('img')
                productImg.src = product.product_image
                productImg.id = product.id
              let productP = document.createElement('p')
                productP.innerText = product.product_name
              let productPrice = document.createElement('p')
              productPrice.innerText = product.product_price
              sideBarLeft.appendChild(productImg)
              sideBarLeft.appendChild(productP)
              sideBarLeft.appendChild(productPrice)
              sideBarLeft.appendChild(productDiv)
            }
        }

    });
  });

  function openNav() {
    sibarBody.style.width = "250px";
  }
  
  function closeNav() {
    sibarBody.style.width = "0";
  }

  let sideBar = document.getElementById('cart')
  let Close = document.querySelector('#close')
  let view = document.querySelectorAll('.View')
  let btn = document.querySelector('.btn')


  view.forEach(view=>{
    view.addEventListener('click' , (e)=>{
      document.querySelector('.card-postion').style.display = 'flex'
     let dataId = e.target.id / 100
     const findObject = products.find(obj => obj.id == dataId);
     console.log(findObject)
    let imgCard = document.querySelector('.cardView')
    let priceCard = document.querySelector('.cardPrice')
    let descCard = document.querySelector('.cardDesc')
    imgCard.src = findObject.product_image
    priceCard.innerText = findObject.product_price
    descCard.innerText = findObject.product_name
    })
  })
  btn.addEventListener('click' , ()=>{
    document.querySelector('.card-postion').style.display = 'none'
  })


  sideBar.addEventListener('click', ()=> openNav() )
  
  Close.addEventListener('click' ,  ()=> closeNav() )
  
