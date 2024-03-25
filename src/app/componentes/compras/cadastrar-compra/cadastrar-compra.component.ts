
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartaoService } from '../../service/cartao.service';
import { CompraService } from '../../service/compra.service';

@Component({
  selector: 'app-cadastrar-compra',
  templateUrl: './cadastrar-compra.component.html',
  styleUrls: ['./cadastrar-compra.component.css']
})
export class CadastrarCompraComponent implements OnInit {

  numerosCartoes: [number, string][] = [];
  numeroCartao: [number, string] | null = null;
  valorCompra: number | null = null;
  categoriaCompra: string | null = null;
  estabelecimentoCompra: string | null = null;

  constructor(
    private router: Router,
    private cartaoService: CartaoService,
    private compraService: CompraService
  ) { }

  ngOnInit(): void {
    this.listarNumerosCartoes();
  }

  cadastrarCompra() {
    if (!this.numeroCartao || !this.valorCompra || !this.categoriaCompra || !this.estabelecimentoCompra) {
      alert("Preencha todos os campos antes de cadastrar a compra.");
      return;
    }

    if (this.valorCompra <= 0 || isNaN(this.valorCompra)) {
      alert("O valor da compra está incorreto.");
      return;
    }

    // Acessando os elementos do array numeroCartao
    const [numberCard, name] = this.numeroCartao;

    // Lógica para cadastrar a compra aqui
    this.compraService.cadastarCompra(numberCard, this.categoriaCompra, this.valorCompra, this.estabelecimentoCompra)
      .subscribe()
      alert('Compra cadastrada com sucesso!');
      this.router.navigate(['/compras']);
  }


  cancelarCadastro() {
    this.router.navigate(['/compras']);
  }

  private listarNumerosCartoes() {
    this.cartaoService.listar().subscribe(
      response => {
        const cartoesMap = new Map<number, string>(); // Usar um mapa para armazenar os números de cartões e os nomes dos titulares únicos
        response.forEach(cartao => {
          cartoesMap.set(cartao.numberCard, cartao.name); // Adicionar o número do cartão e o nome do titular ao mapa
        });
        this.numerosCartoes = Array.from(cartoesMap.entries()); // Converter o mapa para um array de [numberCard, name]
      },
      error => {
        console.error('Erro ao listar números de cartões:', error);
      }
    );
  }

  validateNumberInput(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    const keyCode = event.keyCode;
    const validChars = '0123456789.';
    const isValidChar = validChars.includes(inputChar);

    // Permitir somente números e ponto decimal
    if (!isValidChar) {
      event.preventDefault();
    }

    // Permitir apenas um ponto decimal
    if (inputChar === '.' && this.valorCompra?.toString().includes('.')) {
      event.preventDefault();
    }

    // Evitar entradas inválidas, como duas vírgulas consecutivas
    const invalidKeyCodes = [44]; // Código ASCII para a vírgula
    if (invalidKeyCodes.includes(keyCode)) {
      event.preventDefault();
    }
  }

}
