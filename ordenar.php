<?php
// Array para armazenar os números
$numeros = [];

// Ler 5 números do usuário
for ($i = 0; $i < 5; $i++) {
    $numeros[] = (int)readline("Digite o número " . ($i + 1) . ": ");
}

// Ordenar o array do maior para o menor
rsort($numeros);

// Exibir os números ordenados
echo "Números em ordem decrescente:\n";
foreach ($numeros as $numero) {
    echo $numero . "\n";
}
?>
