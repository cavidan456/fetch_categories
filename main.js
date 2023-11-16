const myDiv = document.getElementById("categories");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", () => categoryRender(btn.innerHTML));
});

function categoryRender(danny) {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            let products = data.products;
            let cate = products.filter((item) => item.category === danny);
            myDiv.innerHTML = " ";
            cate.forEach((item) => {
                let div = document.createElement("div");
                div.innerHTML = `<div class="row">
                <div class="col-12 borderCart">
                    <div class="row">
                        <div class="col-7">
                            <img src="${item.thumbnail}" alt="products">
                        </div>
                        <div class="col-5">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <p>Price:${item.price}$</p>
                        <p>Stock:${item.stock}</p>
                        </div>
                    </div>
                </div>
            </div>`;
                myDiv.appendChild(div);
            });
        });
}
