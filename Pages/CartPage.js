export class CartPage{

    constructor(page){
        this.page=page;
        this.noOfProducts="//tbody/tr/td[2]";
    }

    async checkProductIncart(pproductName){

        const productsICart = await this.page.$$(this.noOfProducts);

        for(const product of productsICart){
            console.log(await product.textContent())

            if(pproductName===await product.textContent()){
                return true;
                break;
            }
        }
    }
}