var buyBtn= document.querySelectorAll('.buy-btn')
var cartItems= document.getElementById('cart-items')
// console.log(cartItems);
const total = document.getElementById("total");
var totalPrice=0
//Xử lý nút MUA
buyBtn.forEach((e)=>{
    e.addEventListener('click',()=>{
        const productName= e.getAttribute('data-product');
        const productPrice=parseInt(e.parentNode.innerHTML.split("$")[1])

        const cartItem = document.createElement('li')
        cartItem.innerHTML=`
        <span>${productName}</span>
        <button class="quantity-btn" data-product="${productName}" data-price="${productPrice}" data-action="decrease">-</button>
        <span class="quantity">1</span>
        <button class="quantity-btn" data-product="${productName}" data-price="${productPrice}" data-action="increase">+</button>
    `;
        cartItems.appendChild(cartItem)
        // console.log(cartItem.innerHTML);
        totalPrice+=productPrice
        total.innerHTML=`Tổng tiền: $${totalPrice}`
        // Xử lý nút số lượng
        const quantityBtns =cartItem.querySelectorAll(".quantity-btn");
        quantityBtns.forEach((btn)=>{
            btn.addEventListener("click",()=>{
                const action=btn.getAttribute('data-action')
                const quantityElement=cartItem.querySelector('.quantity');
                var quantity=parseInt(quantityElement.innerHTML)
                console.log(quantity);
                if(action==='increase'){
                    quantity+=1
                    totalPrice+=productPrice
                }else if(action==='decrease'&& quantity>1){
                    quantity-=1
                }
                quantityElement.innerHTML=quantity
                total.innerHTML= `Tổng tiền: $${totalPrice}`
            })
        })
    })
})

// xử lý nút thanh toán
const checkoutBtn =document.getElementById('checkout')
checkoutBtn.addEventListener('click',()=>{
    
    if(confirm("Bạn có đồng ý thanh toán không ?")==true){
        cartItems.innerHTML=""
        totalPrice=0
        total.innerHTML=`Tổng tiền: $0`

    }
})

