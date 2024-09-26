const brands = document.querySelector('ul.brands'),
total_brand = brand_children.Lenght;
document.documentElement.style.setProperty('--total-brand', total_brand)

for(let i =0; i< total_brand; i++){
    brands.appendChild(brand_children[i].cloneNode(true))
}