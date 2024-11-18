import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'POCO F6 5G (Black, 256 GB)',
            price: 31999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/r/e/-original-imahf39qxccmgkhc.jpeg?q=70',
            category: 'mobiles',
            brand: 'poco',
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/r/a/g34-5g-pb1v0002in-motorola-original-imagwu4r3qmmu8fe.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/r/i/g34-5g-pb1v0002in-motorola-original-imagwu4r9mhchvgx.jpeg?q=70&crop=false'
            ]
        },
        {
            id: 2,
            name: 'Motorola G34 5G (Ocean Green, 128 GB)',
            price: 11999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/r/e/-original-imahf39qxccmgkhc.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 3,
            name: 'OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 256 GB)',
            price: 18633,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/z/u/-original-imagtxvtmxpagdpn.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 4,
            name: 'POCO C65 (Pastel Blue, 128 GB)',
            price: 7499,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 5,
            name: 'realme C65 5G (Feather Green, 64 GB)',
            price: 10499,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/8/i/-original-imahy99nvkpewtzy.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 6,
            name: 'Samsung Galaxy F22 (Denim Blue, 128 GB)',
            price: 14999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.26 cm (6.4 inch) Display',
                '48MP + 8MP + 2MP + 2MP | 13MP Front Camera',
                '6000 mAh Battery',
                'MediaTek Helio G80 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/kqqykcw0/mobile/v/4/4/galaxy-f22-sm-e225flbdins-samsung-original-imag4z99f54fygfy.jpeg?q=70&crop=false://rukminim2.flixcart.com/image/312/312/kqco5u80/mobile/m/b/q/galaxy-f22-sm-e225flbdins-samsung-original-imag4aa7fmbfy8hz.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 7,
            name: 'Apple iPhone 13 (Blue, 128 GB)',
            price: 69900,
            specifications: [
                '4 GB RAM | 128 GB ROM',
                '15.49 cm (6.1 inch) Display',
                '12MP + 12MP | 12MP Front Camera',
                '3240 mAh Battery',
                'A15 Bionic Chip Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70&crop=false://rukminim2.flixcart.com/image/312/312/ktlu9ow0/mobile/a/0/s/iphone-13-mlph3hn-a-apple-original-imag6vpb7zg6h4h4.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 8,
            name: 'Redmi Note 11T 5G (Stardust White, 128 GB)',
            price: 17999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.33 cm (6.43 inch) Display',
                '50MP + 8MP | 16MP Front Camera',
                '5000 mAh Battery',
                'MediaTek Dimensity 810 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/v/v/-original-imag9g37hzxggjgg.jpeg?q=70&crop=false://rukminim2.flixcart.com/image/312/312/kwmfqfk0/mobile/g/x/e/note-11t-5g-2201116sg-redmi-original-imag98zudvtuwh4q.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 9,
            name: 'Vivo Y73 (Diamond Flare, 128 GB)',
            price: 20990,
            specifications: [
                '8 GB RAM | 128 GB ROM',
                '16.36 cm (6.44 inch) Display',
                '64MP + 2MP + 2MP | 16MP Front Camera',
                '4000 mAh Battery',
                'MediaTek Helio G95 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/7/q/-original-imagjdmzzkzzsmhe.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 10,
            name: 'OPPO A74 5G (Fluid Black, 128 GB)',
            price: 17990,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.51 cm (6.5 inch) Display',
                '48MP + 2MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Qualcomm Snapdragon 480 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/knyxqq80/mobile/w/w/t/a74-5g-black-cph2263-oppo-original-imag2gxbyhjnt6vw.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 11,
            name: 'Realme GT Neo 3 (Nitro Blue, 256 GB)',
            price: 42999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '64MP + 8MP + 2MP | 16MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 8100 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/l3rmzrk0/mobile/h/a/n/-original-imagetmezh7hj2zk.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 12,
            name: 'Google Pixel 6a (Charcoal, 128 GB)',
            price: 31999,
            specifications: [
                '6 GB RAM |128 GB ROM',
                '15.75 cm (6.2 inch) Display',
                '12.2MP + 12MP | 8MP Front Camera',
                '4410 mAh Battery',
                'Google Tensor Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 13,
            name: 'Nokia G21 (Nordic Blue, 128 GB)',
            price: 12999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.51 cm (6.5 inch) Display',
                '50MP + 2MP + 2MP | 8MP Front Camera',
                '5050 mAh Battery',
                'Unisoc T606 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/l2f20sw0/mobile/0/q/g/-original-imagdr8zmfhcpery.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 14,
            name: 'Micromax IN 2B (Blue, 64 GB)',
            price: 8499,
            specifications: [
                '4 GB RAM | 64 GB ROM',
                '16.56 cm (6.52 inch) Display',
                '13MP + 2MP | 5MP Front Camera',
                '5000 mAh Battery',
                'Unisoc T610 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/kri3xjk0/mobile/s/v/d/in-2b-e7544-micromax-original-imag5a3yybhpzeqc.jpeg?q=70&crop=false',
            category: 'mobiles'
        },
        {
            id: 15,
            name: 'Lava Z2 Max (Stroked Cyan, 32 GB)',
            price: 7799,
            specifications: [
                '2 GB RAM | 32 GB ROM',
                '17.27 cm (6.8 inch) Display',
                '13MP + 2MP | 8MP Front Camera',
                '6000 mAh Battery',
                'MediaTek Helio G35 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kuof5ow0/mobile/s/k/3/z2c-le000z93p-lava-original-imag7r6sspgzpr3k.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 16,
            name: 'Sony Xperia 10 III (Blue, 128 GB)',
            price: 34990,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '15.24 cm (6 inch) Display',
                '12MP + 8MP + 8MP | 8MP Front Camera',
                '4500 mAh Battery',
                'Qualcomm Snapdragon 690 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/mobile/f/3/h/sony-xperia-t2-ultra-original-imadwkc7ggy5re9e.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 17,
            name: 'Infinix Note 10 (Emerald Green, 128 GB)',
            price: 10999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '17.65 cm (6.95 inch) Display',
                '48MP + 2MP + 2MP | 16MP Front Camera',
                '5000 mAh Battery',
                'MediaTek Helio G85 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kpodocw0/mobile/x/l/k/note-10-pro-infinix-x695-256-8-infinix-original-imag3uy68quzt9zs.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 18,
            name: 'Tecno Spark 7T (Nebula Orange, 64 GB)',
            price: 8999,
            specifications: [
                '4 GB RAM | 64 GB ROM',
                '16.56 cm (6.52 inch) Display',
                '48MP + AI Lens | 8MP Front Camera',
                '6000 mAh Battery',
                'MediaTek Helio G35 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/k3dc7m80/mobile/7/j/k/tecno-spark-power-lb8a-original-imafmgsugx6yffss.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 19,
            name: 'iQOO Z5 5G (Arctic Dawn, 128 GB)',
            price: 23990,
            specifications: [
                '8 GB RAM | 128 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '64MP + 8MP + 2MP | 16MP Front Camera',
                '5000 mAh Battery',
                'Qualcomm Snapdragon 778G Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/c/a/z9-5g-i2302-iqoo-original-imahf3nt7ujcjvm6.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 20,
            name: 'Realme 8i (Space Black, 128 GB)',
            price: 15999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.54 cm (6.51 inch) Display',
                '50MP + 2MP + 2MP | 16MP Front Camera',
                '5000 mAh Battery',
                'MediaTek Helio G96 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/ktbu6q80/mobile/x/w/y/8i-rmx3151-realme-original-imag6zhnabagtrzu.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 21,
            name: 'Samsung Galaxy M32 (Light Blue, 128 GB)',
            price: 16999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.26 cm (6.4 inch) Display',
                '64MP + 8MP + 2MP + 2MP | 20MP Front Camera',
                '6000 mAh Battery',
                'MediaTek Helio G80 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/t/1/-original-imag6jm69crass7p.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 22,
            name: 'Vivo V23e 5G (Sunshine Gold, 128 GB)',
            price: 24990,
            specifications: [
                '8 GB RAM | 128 GB ROM',
                '16.35 cm (6.43 inch) Display',
                '50MP + 8MP + 2MP | 44MP Front Camera',
                '4050 mAh Battery',
                'MediaTek Dimensity 810 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kzvlua80/mobile/l/f/p/-original-imagbs8hgkpxw9vb.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 23,
            name: 'OPPO Reno6 Pro 5G (Aurora, 256 GB)',
            price: 39999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.64 cm (6.55 inch) Display',
                '64MP + 8MP + 2MP + 2MP | 32MP Front Camera',
                '4500 mAh Battery',
                'MediaTek Dimensity 1200 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kr2e3680/mobile/l/p/k/reno6-pro-5g-cph2249-oppo-original-imag4xpc6mc62mzq.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 24,
            name: 'Realme Narzo 50 (Speed Black, 128 GB)',
            price: 12999,
            specifications: [
                '4 GB RAM | 128 GB ROM',
                '16.51 cm (6.5 inch) Display',
                '50MP + 2MP + 2MP | 16MP Front Camera',
                '5000 mAh Battery',
                'MediaTek Helio G96 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/l0bbonk0/shopsy-mobile/p/k/x/-original-imagc4qj5ejywxnv.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 25,
            name: 'Infinix Hot 10S (Morandi Green, 64 GB)',
            price: 9499,
            specifications: [
                '4 GB RAM | 64 GB ROM',
                '17.32 cm (6.82 inch) Display',
                '48MP + 2MP + AI Lens | 8MP Front Camera',
                '6000 mAh Battery',
                'MediaTek Helio G85 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kqfj1jk0/mobile/h/l/d/hot-10s-x689-64-4-infinix-original-imag4fk5ajmdtwz4.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 26,
            name: 'Tecno Pova 2 (Dazzle Black, 128 GB)',
            price: 10999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '17.78 cm (7 inch) Display',
                '48MP + 2MP + 2MP + AI Lens | 8MP Front Camera',
                '7000 mAh Battery',
                'MediaTek Helio G85 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/9/c/pova-5-45w-ultra-fast-charging-6000mah-big-battery-3d-textured-original-imahyg3regfvdghv.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 27,
            name: 'Samsung Galaxy M32 5G (Slate Black, 128 GB)',
            price: 20999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.51 cm (6.5 inch) Display',
                '48MP + 8MP + 5MP + 2MP | 13MP Front Camera',
                '5000 mAh Battery',
                'MediaTek Dimensity 720 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/z/x/-original-imag6jmvqyef5nyf.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 28,
            name: 'Xiaomi Mi 11X (Lunar White, 128 GB)',
            price: 29999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '48MP + 8MP + 5MP | 20MP Front Camera',
                '4520 mAh Battery',
                'Qualcomm Snapdragon 870 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kq6yefk0/mobile/i/w/m/11-lite-m2101k9ai-mi-original-imag496gkgqjrvvg.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 29,
            name: 'Apple iPhone 12 (Purple, 128 GB)',
            price: 65999,
            specifications: [
                '4 GB RAM | 128 GB ROM',
                '15.49 cm (6.1 inch) Display',
                '12MP + 12MP | 12MP Front Camera',
                '2815 mAh Battery',
                'A14 Bionic Chip Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 30,
            name: 'OPPO F19 Pro+ 5G (Space Silver, 128 GB)',
            price: 25990,
            specifications: [
                '8 GB RAM | 128 GB ROM',
                '16.34 cm (6.43 inch) Display',
                '48MP + 8MP + 2MP + 2MP | 16MP Front Camera',
                '4310 mAh Battery',
                'MediaTek Dimensity 800U Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kn97te80/mobile/p/m/9/f19-pro-5g-cph2213-oppo-original-imagfz38hbzjhkqx.jpeg?q=70',
            category: 'mobiles'
        }
    ]);
    const [filteredProducts,setfilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState('');
    const searchProducts=()=>{
        console.log(searchTerm);
    }
    useEffect(()=>{
        const _filteredProducts = products.filter(product=>product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setfilteredProducts(_filteredProducts);

    },[searchTerm]);


    return (
        <div>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full p-2 border border-gray-300 rounded-l"
                />
               
            </div>

            <div className="flex flex-wrap gap-y-5 justify-start my-6">
                {filteredProducts.map(product => (
                    <div key={product.name} className="w-1/4 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={product.imgSrc} alt="Apple iPhone 15" className="h-64 mx-auto" />
                        <div className="p-4">
                            <Link to={`/product/${product.id}?name=${product.name}&price=${product.price}`}><h2 className="text-xl font-semibold text-gray-800 cursor-pointer">{product.name}</h2></Link>
                            <div className="flex items-center mt-2 text-sm text-gray-600">
                                <span className="bg-green-500 text-white rounded-md px-2 py-1 text-xs">4.6 ★</span>
                                <span className="ml-2">184,914 ratings & 6,139 reviews</span>
                            </div>
                            <ul className="mt-2 text-gray-600 text-sm space-y-1">
                                {product.specifications.map((specification, index) => (
                                    <li key={index}>{specification}</li>
                                ))}
                            </ul>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-xl font-semibold text-gray-800">₹{product.price}</span>
                                <span className="ml-2 text-sm text-gray-500 line-through">₹69,900</span>
                                <span className="ml-2 text-sm text-green-500">19% off</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Upto ₹33,950 Off on Exchange</p>
                            <p className="text-sm text-gray-500">Free delivery</p>
                            <button className="bg-yellow-500 text-white px-3 mt-2 py-1 rounded">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;