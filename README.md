FORMATO: 1A
HOST: http://polls.apiblueprint.org/

# Enquetes

Polls é uma API simples que permite aos consumidores visualizar enquetes e votar nelas. Você pode ver esta documentação em [Apiary] (http://docs.pollsapi.apiary.io).

# Polls API Root [/]

Este recurso não possui atributos. Em vez disso, oferece os recursos iniciais da API na forma de links no corpo JSON.

Recomenda-se seguir os valores do link “url”, [Link] (https://tools.ietf.org/html/rfc5988) ou cabeçalhos de localização, quando aplicável, para recuperar recursos. Em vez de construir seus próprios URLs, para manter seu cliente desacoplado dos detalhes de implementação.

## Recuperar o ponto de entrada [GET]

+ Resposta 200 (aplicativo / json)

        {
            "question_url": "/ question"
        }

## Pergunta do Grupo

Recursos relacionados a perguntas na API.

## Question [/ questions / {question_id}]

Um objeto Question tem os seguintes atributos:

+ pergunta
+ Published_at - Uma data ISO8601 em que a pergunta foi publicada.
+ url
+ escolhas - Uma matriz de objetos Choice.

+ Parâmetros
    + question_id: 1 (obrigatório, número) - ID da questão na forma de um inteiro

### Ver um Detalhe de Perguntas [GET]

+ Resposta 200 (aplicativo / json)

        {
            "question": "Linguagem de programação favorita?",
            "posted_at": "2014-11-11T08: 40: 51.620Z",
            "url": "/ perguntas / 1",
            "escolhas": [
                {
                    "escolha": "Swift",
                    "url": "/ perguntas / 1 / escolhas / 1",
                    "votos": 2048
                }, {
                    "escolha": "Python",
                    "url": "/ perguntas / 1 / escolhas / 2",
                    "votos": 1024
                }, {
                    "escolha": "Objective-C",
                    "url": "/ perguntas / 1 / escolhas / 3",
                    "votos": 512
                }, {
                    "escolha": "Ruby",
                    "url": "/ perguntas / 1 / escolhas / 4",
                    "votos": 256
                }
            ]
        }

## Choice [/ questions / {question_id} / choices / {choice_id}]

+ Parâmetros
    + question_id: 1 (obrigatório, número) - ID da questão na forma de um inteiro
    + choice_id: 1 (obrigatório, número) - ID da escolha na forma de um inteiro

### Vote em uma escolha [POST]

Esta ação permite que você vote na escolha de uma questão.

+ Resposta 201

    + Cabeçalhos

            Localização: / perguntas / 1

## Coleção de perguntas [/ questions {? Page}]

+ Parâmetros
    + página: 1 (opcional, número) - A página de perguntas a retornar

### Listar todas as perguntas [GET]

+ Resposta 200 (aplicativo / json)

    + Cabeçalhos

            Link: </ questions? Page = 2>; rel = "próximo"

    + Corpo

            [
                {
                    "question": "Linguagem de programação favorita?",
                    "posted_at": "2014-11-11T08: 40: 51.620Z",
                    "url": "/ perguntas / 1",
                    "escolhas": [
                        {
                            "escolha": "Swift",
                            "url": "/ perguntas / 1 / escolhas / 1",
                            "votos": 2048
                        }, {
                            "escolha": "Python",
                            "url": "/ perguntas / 1 / escolhas / 2",
                            "votos": 1024
                        }, {
                            "escolha": "Objective-C",
                            "url": "/ perguntas / 1 / escolhas / 3",
                            "votos": 512
                        }, {
                            "escolha": "Ruby",
                            "url": "/ perguntas / 1 / escolhas / 4",
                            "votos": 256
                        }
                    ]
                }
            ]

### Crie uma nova pergunta [POST]

Você pode criar sua própria pergunta usando esta ação. Leva um objeto JSON contendo uma pergunta e uma coleção de respostas na forma de escolhas.

+ pergunta (string) - A pergunta
+ escolhas (array [string]) - Uma coleção de escolhas.

+ Solicitação (aplicativo / json)

        {
            "question": "Linguagem de programação favorita?",
            "escolhas": [
                "Rápido",
                "Pitão",
                "Objective-C",
                "Rubi"
            ]
        }

+ Resposta 201 (aplicativo / json)

    + Cabeçalhos

            Localização: / perguntas / 2

    + Corpo

            {
                "question": "Linguagem de programação favorita?",
                "posted_at": "2014-11-11T08: 40: 51.620Z",
                "url": "/ perguntas / 2",
                "escolhas": [
                    {
                        "escolha": "Swift",
                        "url": "/ perguntas / 2 / escolhas / 1",
                        "votos": 0
                    }, {
                        "escolha": "Python",
                        "url": "/ perguntas / 2 / escolhas / 2",
                        "votos": 0
                    }, {
                        "escolha": "Objective-C",
                        "url": "/ perguntas / 2 / escolhas / 3",
                        "votos": 0
                    }, {
                        "escolha": "Ruby",
                        "url": "/ perguntas / 2 / escolhas / 4",
                        "votos": 0
                    }
                ]
            }
