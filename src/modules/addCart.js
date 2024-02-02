export const addCartFunc = (cartIconClass) => {
    const ourProdBlock = document.querySelector(".section_products");
    const bestCoffeBlock = document.querySelector(".block_best_coffe");
    const spanCount = document.querySelector(cartIconClass);
    const blockAddedprod = document.querySelector(".prod_cart_check");

    let counter = 0;
    let cartData = [];

    const setData = (data) => {
        const saveData = JSON.stringify(data);
        localStorage.setItem("product_cart", saveData);
    };

    const collectionData = (products) => {
        cartData = [];

        products.forEach((prod) => {
            const img = prod.querySelector(".img_cart_prod");
            const nameProd = prod.querySelector(".product_name");
            const desc = prod.querySelector(".descriptions_prod");
            const price = prod.querySelector(".price");
            const quantity = prod.querySelector(".prod_quantity");
            const total = prod.querySelector(".total");

            const newProduc = {
                img: img.getAttribute("src"),
                prodName: nameProd.textContent.trim(),
                desc: desc.textContent.trim(),
                priceOne: price.textContent.trim(),
                quanty: quantity.value === undefined ? 1 : Number(quantity.value),
                total: total.textContent.trim(),
            };

            cartData.push(newProduc);
        });

        setData(cartData);
    };

    const setFullPrice = (fullPrice) => {
        const subTotal = document.querySelector(".subtot_span");
        const devilery = document.querySelector(".devil_span");
        const discont = document.querySelector(".discont_span");
        const totalFull = document.querySelector(".total_gold");

        let totalFinal = 0;

        if (fullPrice > 0 && fullPrice <= 20) {
            totalFinal = fullPrice + 5;
            subTotal.textContent = `$${fullPrice.toFixed(2)}`;
            devilery.textContent = `$5.00`;
            totalFull.textContent = `$${totalFinal.toFixed(2)}`;
            discont.textContent = `$0.00`;
        } else if (fullPrice > 20 && fullPrice <= 30) {
            totalFinal = fullPrice - 3;

            discont.textContent = `$3.00`;
            subTotal.textContent = `$${fullPrice.toFixed(2)}`;
            devilery.textContent = `$0.00`;
            totalFull.textContent = `$${totalFinal.toFixed(2)}`;
        } else if (fullPrice > 30) {
            totalFinal = fullPrice - 5;

            discont.textContent = `$5.00`;
            subTotal.textContent = `$${fullPrice.toFixed(2)}`;
            devilery.textContent = `$0.00`;
            totalFull.textContent = `$${totalFinal.toFixed(2)}`;
        } else {
            discont.textContent = `$0.00`;
            subTotal.textContent = `$0.00`;
            devilery.textContent = `$0.00`;
            totalFull.textContent = `$0.00`;
        }
    };

    const calcCart = () => {
        const products = blockAddedprod.querySelectorAll(".prodict_checked");
        const nullText = document.querySelector(".null_cart");

        let fullPrice = 0;

        if (products.length === 0) {
            nullText.style.display = "flex";
        } else {
            nullText.style.display = "none";
        }

        products.forEach((product) => {
            const priceElement = product.querySelector(".price");
            const quantityElement = product.querySelector(".prod_quantity");
            const totalSum = product.querySelector(".total");

            const price = parseFloat(priceElement.textContent.trim().slice(1));
            const quantity = parseInt(quantityElement.value, 10);

            if (isNaN(quantity)) {
                totalSum.textContent = `$0.00`;
            } else {
                totalSum.textContent = `$${Math.ceil(price * quantity)}`;
            }

            fullPrice += price * quantity;
        });

        setFullPrice(Math.round(fullPrice));
        collectionData(products);
    };

    const delProd = (elem) => {
        const nullCart = document.querySelector(".null_cart");

        --counter;

        spanCount.textContent = counter;

        if (counter === 0) {
            nullCart.style.opacity = "1";
        }

        blockAddedprod.removeChild(elem);

        calcCart();
    };

    const addProd = (prod) => {
        const imgPath = prod.querySelector("img");
        const titleProduct = prod.querySelector(".tit_card_coffe");
        const description = prod.querySelector(".text_card_coffe");
        const price = prod.querySelector(".sale_prod");
        const nullCart = document.querySelector(".null_cart");

        counter++;

        if (counter > 0) {
            nullCart.style.opacity = "0";
        }

        spanCount.textContent = counter;

        blockAddedprod.innerHTML += `
        <div class="prodict_checked">
            <a href="#" class="del_product"></a>
            <img class="img_cart_prod" src="${imgPath.getAttribute(
                "src"
            )}" alt="img">
                <div class="titles_cart">
                     <h3 class="product_name">${titleProduct.textContent}</h3>
                     <p class="descriptions_prod">${description.textContent}</p>
                </div>
            <p class="price">${price.textContent}</p>
            <div class="quantity">
                <div class="input-prod">
                    <input type="text" value="1" name="quantity" class="prod_quantity" maxlength="3"  placeholder="1">
                </div>
            </div>
            <p class="total">${price.textContent}</p>
        </div>
        `;

        calcCart();
    };

    const unloadingCart = (data, messega) => {
        messega.style.display = "none";

        counter = data.length;
        spanCount.textContent = counter;

        data.forEach((item) => {
            blockAddedprod.innerHTML += `
            <div class="prodict_checked">
            <a href="#" class="del_product"></a>
            <img class="img_cart_prod" src="${item.img}" alt="img">
                <div class="titles_cart">
                     <h3 class="product_name">${item.prodName}</h3>
                     <p class="descriptions_prod">${item.desc}</p>
                </div>
            <p class="price">${item.priceOne}</p>
            <div class="quantity">
                <div class="input-prod">
                    <input type="text" value="${item.quanty}" name="quantity" class="prod_quantity" maxlength="3"  placeholder="1">
                </div>
            </div>
            <p class="total">${item.total}</p>
        </div>
        `;
        });

        calcCart();
    };

    const getDataCart = () => {
        const data = localStorage.getItem("product_cart");

        cartData = JSON.parse(data) || [];

        if (cartData.length === 0) {
            return;
        } else {
            unloadingCart(cartData, document.querySelector(".null_cart"));
        }
    };

    getDataCart();

    blockAddedprod.addEventListener("input", (e) => {
        if (e.target.className === "prod_quantity") {
            const card = e.target.closest(".prodict_checked");
            const newQuanty = card.querySelector(".prod_quantity");
            newQuanty.defaultValue = e.target.value;

            calcCart();
        }
    });

    blockAddedprod.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.className === "del_product") {
            delProd(e.target.closest('div[class="prodict_checked"]'));
        }
    });

    ourProdBlock.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.className === "prod_add_cart") {
            addProd(e.target.closest("div[id]"));
        }
    });

    bestCoffeBlock.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.className === "prod_add_cart") {
            addProd(e.target.closest("div[id]"));
        }
    });
};