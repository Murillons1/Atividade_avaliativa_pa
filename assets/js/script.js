
    let produto = document.getElementById("produto").value
    let produtoqt = Number (document.getElementById("produtoqt").value)
    let produtop = Number(document.getElementById("produtop").value)
    let total = document.getElementById("total")

    let tipo_produto = []
    let quantidade = []
    let preco_produto = []

    parcial.addEventListener("click",()=>{
        let produto = document.getElementById("produto").value
        let produtoqt = document.getElementById("produtoqt").value
        let produtop = document.getElementById("produtop").value
        

            tipo_produto.push(produto)
            quantidade.push(produtoqt)
            preco_produto.push(produtop)

        
            console.log(tipo_produto)
            console.log(quantidade)
            console.log(preco_produto)

        
            let soma = 0.0
            for(i=0;i<preco_produto;i++){
                soma = soma + (quantidade[i]*preco_produto[i])
            }
    
            vetor.innerHTML = ""
             for(i-0;i<preco_produto.length;i++){
                soma = soma + (quantidade[i]*preco_produto[i])


                    vetor.innerHTML += "Produto" + tipo_produto [i] + "&emsp"
                    vetor.innerHTML += "quantidade" + quantidade [i] + "&emsp"
                    vetor.innerHTML += "preco_produto" + preco_produto [i] 
        
    }

            vetor.innerHTML = "Produto confirmado :" + "</br>" + tipo_produto
    
        })

        total.addEventListener("click",()=>{
            let valor_compra = document.getElementById("valor_compra")
            if(vetor [i]>=100){
                desconto = 5* (vetor/100)
                total_compra = desconto [i] - vetor [i]

            }
                valor_compra.innerHTML = "O total que será pago é R$ " + total

        })
    



