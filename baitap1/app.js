var products = [
    {
        image: 'https://vn-live-01.slatic.net/original/121ab4237bd54730b9ec26167b21e2ff.jpg',
        name: 'đTDĐ MAXX N3310 Classic 2 Sim (Đỏ)',
        price: '168.150 ₫'
    },
    {
        image: 'https://vn-live-02.slatic.net/original/93b5dcf86fcddf24a503e82a3e475340.jpg',
        name: 'wiko U Feel Go 16GB RAM 3GB 4000mAH (Vàng) - Hãng phân phối ABCD',
        price: '1.788.000 ₫'
    },
    {
        image: 'https://vn-live-02.slatic.net/original/16473e8de450403206fa504515bc9521.jpg',
        name: 'đTDĐ MAXX N1280 (Xám) - Bảo hành 12 tháng - HÃNG PHÂN PHỐI XYZ',
        price: '113.050 ₫'
    },
    {
        image: 'https://vn-live-01.slatic.net/original/4cbbe97db295b05b39cd0d8935e0bcba.jpg',
        name: 'đTDĐ MAXX N1110 2 Sim (Đen)',
        price: '154.850 ₫'
    },
    {
        image: 'https://vn-live-02.slatic.net/original/89bce8332f0b89c0500f59ac00501c0c.jpg',
        name: 'điện thoại di động ZONO N8110 (2.4 inch) 2 Sim - Vàng',
        price: '246.050 ₫'
    },
    {
        image: 'https://vn-live-02.slatic.net/original/0cb7d89f8a64e474f6a54b2a47d43546.jpg',
        name: 'điện thoại ZIP8 - Hàng Chính Hãng - Bảo Hành 12 Tháng - Tặng ốp lưng',
        price: '989.000 ₫'
    },
    {
        image: 'https://vn-live-01.slatic.net/original/fd6eecbdd5ff9c4e002c375a1758546c.jpg',
        name: 'đTDĐ MAXX N3310 CLASSIC 2 Sim (Xám)',
        price: '168.150 ₫'
    }
]


function render() {
    var html=''
    for (var i=0; i<products.length; i++) {
        var product = products[i]
        console.log(product);
        html+=`<ul>
        <li><img src="${product.image}" alt=""></li>
        <li>${product.name}</li>
        <li>${product.price}</li>
    </ul>`
    }

    var list= document.getElementById('product')
    list.innerHTML=html
}
render()