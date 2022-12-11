const category_req = fetch("http://localhost:5000/api/categories/");
const get_categories = async () => {
  let category_response = await category_req;
  let categories = await category_response.json();
  addcategorys(categories.data)
};

const addcategorys=(data)=>{
    data.forEach(element => {
        document.getElementById("category").innerHTML += showcategory(element);
    });
}

const showcategory = (category)=>{
    return `
    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style="width: 100px; height: 100px;">
                            <img class="img-fluid" src="${category.image}" alt="">
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>${category.name}</h6>
                            <small class="text-body">${category.productCount} Products</small>
                        </div>
                    </div>
                </a>
            </div>`

};
get_categories();