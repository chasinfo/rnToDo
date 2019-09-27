# rnTodo

**Criação de uma aplicação para fins de estudos e práticas com React Native consumindo um Webservice**

*Segue as configurações para acesso ao Webservice*

Sua URL https://b7web.com.br/todo/64650/info

Listar todos os items:Método: GET URL: https://b7web.com.br/todo/64650
- Para INSERIR um item:Método: POST URL: https://b7web.com.br/todo/64650
- Parâmetros:
- item (string, obrigatório) -> "Texto do item"

Para ALTERAR um item:
Método: PUT
https://b7web.com.br/todo/64650/123
* 123 é um número simbólico, sendo este o ID do item que você quer alterar
Parâmetros:
item (string, opcional) -> novo texto
done (string, opcional) -> sim ou nao
Para DELETAR um item:

Método: DELETE
https://b7web.com.br/todo/64650/123
* 123 é um número simbólico, sendo este o ID do item que você quer deletar
Para SINCRONIZAR os itens:

Método: POST
https://b7web.com.br/todo/64650/sync
Parâmetros:
json (string, obrigatório) -> uma string do json da lista
