interface preco_nome_descricao {
    preco: number
    nome: string
    descricao(): void
}

class frangoAssado {
    
    constructor(private preco: number,private nome: string){
        this.preco = 4.50
        this.nome = 'Frango assado'
    }

    descricao(): void {
        console.log(`O sanduíche de ${this.nome} custa R$${this.preco}`);
    }
}

class pepperoni {
    constructor(private preco: number, private nome: string){
        this.preco = 0.99
        this.nome = 'Peperoni'
    }

    descricao(): void {
        console.log(`O ingrediente adicional ${this.nome} custa R$${this.preco}`);
    }
}

class QueijoMussarelaRalado {
    constructor(private preco: number, private nome: string){
        this.preco = 2.00
        this.nome = 'Queijo Mussarela Ralado'
    }

    descricao(): void {
        console.log(`O ingrediente adicional ${this.nome} custa R$${this.preco}`);
    }
}

class Sanduiche {
    constructor(private preco: number, private nome: string){
        this.preco = 7.49
        this.nome = 'Carne, bacon e queijo mussarela'
    }

    descricao(): void {
        console.log(`O Sanduiche de ${this.nome} custa R$${this.preco}`);
    }
}

export {Sanduiche, frangoAssado, pepperoni, QueijoMussarelaRalado}