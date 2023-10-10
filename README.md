# NanoTask

O NanoTask é um gerenciador de tarefas baseado na técnica de nanotarefas, projetado para ajudar os usuários a aprimorar seu gerenciamento de tempo,
dividindo grandes tarefas em tarefas menores e acompanhando seu progresso. Este produto tem como um de seus principais objetivos ensinar aos
usuários no dia a dia no uso do produto a habilidade de dividir tarefas complexas em ações menores, permitindo uma abordagem mais eficaz para alcançar seus objetivos.
Além disso, capacita os usuários a mensurar o tempo gasto em cada tarefa, promovendo uma maior consciência sobre o uso do tempo.
A priorização das tarefas é facilitada por métodos como a MATRIZ GUT, Matriz de Eisenhower e Matriz 4x4 e garantindo que as atividades mais importantes sejam
identificadas e realizadas com eficiência. O NanoTask é uma ferramenta abrangente para otimizar a gestão do tempo, promover o aprendizado e aumentar a produtividade,
permitindo que os usuários alcancem seus objetivos de maneira eficaz.

## Para quem indico o NanoTask?

O NanoTask é ideal para aqueles que desejam melhorar significativamente seu gerenciamento de tempo,
dividir tarefas complexas em ações menores e priorizar suas atividades de forma eficaz. Recomendamos o NanoTask para:

**Profissionais Autônomos e Empresários:** Aqueles que têm uma carga de trabalho variável e precisam gerenciar várias tarefas ao mesmo
tempo podem se beneficiar do NanoTask para organizar suas atividades e manter o foco nas tarefas mais importantes.

**Estudantes:** Estudantes podem usar o NanoTask para dividir seus estudos e trabalhos acadêmicos em tarefas menores,
facilitando o acompanhamento de seu progresso e evitando a procrastinação.

**Profissionais de TI e Desenvolvedores:** Para aqueles que trabalham em projetos de software ou qualquer tipo de desenvolvimento,
o NanoTask pode ser útil para gerenciar tarefas de programação e garantir a conclusão de projetos no prazo.

**Pessoas que Desejam Melhorar a Produtividade:** Se você está procurando uma maneira de aumentar sua produtividade diária,
o NanoTask pode ajudar a criar uma abordagem mais estruturada para suas tarefas e objetivos.

**Aprendizado e Desenvolvimento Pessoal:** Aqueles que desejam desenvolver habilidades de gerenciamento de tempo,
divisão de tarefas e priorização podem usar o NanoTask como uma ferramenta de aprendizado e autodesenvolvimento.

## Como indico usar?

- Reserve 1h do seu dia para organizar suas tarefas se achar que precisa de mais tempo, reserve mais tempo.
- Crie tarefas com no máximo 5 nanos, se precisar de mais nanos para uma tarefa, divida a tarefa em duas.
- Crie nanos com no máximo 2h de duração, se precisar de mais tempo para um nano, divida o nano em dois.
- Priorize suas tarefas usando a Matriz GUT, Matriz de Eisenhower ou Matriz 4x4, conforme achar melhor.
- Ao finalizar o planejamento do dia, comece a executar as tarefas.
- Evite ao máximo interrupções durante a execução das tarefas.
- Evite ao máximo modificar as lista de tarefas e a priorização durante a execução das tarefas.
- Ao final do dia faça uma reflexão sobre o que foi feito e o que pode ser melhorado no planejamento.

**Fique a vontade de utilizar NanoTask conforme achar melhor para você, o importante é que você consiga melhorar sua produtividade e aprendizado.**

## Definições

- Nano: É uma tarefa que pode ser executada em um dia (> 24h).
- Tarefa: É um conjunto de nanos que tem um contexto em comum.
- Score: É a pontuação que o usuário ganha ao finalizar um nano dentro do dia.
- Level: É o nível que o usuário está no momento de acordo com níveis de conquitados de pontos dentro do período definido.

## Features

**Usuário**

- Cada usuário pode ter apenas uma conta.
- O usuário é o dono de todas as tarefas e nanos que ele criar.
- O usuário é o único que pode criar, editar e excluir suas tarefas e nanos.

**Nano**

- Finalizado: Um nano só pode ser finalizado se estiver em execução.
- Pausado: Um nano só pode ser pausado se estiver em execução.
- Retomado: Um nano só pode ser retomado se estiver pausado.
- Cancelado: Um nano só pode ser cancelado se estiver em execução ou pausado.
- Excluido: Um nano só pode ser excluido se ele não foi iniciado ou estiver cancelado.
- Duração real: A duração de um nano é calculada a partir da data de início e data de finalização.
- Duração andamento: A duração de um nano em andamento é calculada a partir da data de início e data atual quando o nano estiver em execução ou pausado.
- Duração estimada: A duração estimada de um nano é informada pelo usuário no momento da criação do nano.
- Duração restante: A duração restante de um nano é calculada a partir da duração estimada e a duração real ou em andamento.
- Duração excedida: A duração excedida de um nano é calculada a partir da duração real ou em andamento e a duração estimada.

**Tarefa**

- Finalização: Uma tarefa só pode ser finalizada se todos os nanos estiverem finalizados.
- Cancelamento: Quando uma tarefa é cancelada todos os nanos são cancelados
- Exclusão: Uma tarefa só pode ser excluida se tarefa estiver cancelada.
- Reabertura: Uma tarefa é reaberta quando um nano é criado ou reaberto.
- Inicialização: Uma tarefa é aberta quando um nano é iniciado.

** Priorização **

A priorização serão ferramentas usando padrões como MATRIZ GUT e Matriz de Eisenhower.

- **MATRIZ GUT:** coloca todas as tarefas em uma tabela cada tarefa em uma linha
- **MATRIZ GUT:** temos as colunas Gravidade, Urgência, Tendência e Total
- **MATRIZ GUT:** a pessoa irá priorizar cada tarefa dando uma nota 1 a 5 para cada tarefa sobre as colunas
- **MATRIZ GUT:** a nota 1 é a menor e a nota 5 é a maior
- **MATRIZ GUT:** o total é a multiplicação das notas de cada coluna data para a tarefa

**Score**

- Score: Todo o Score é medido em pontos dentro de um dia (24h) usando os nanos finalizados.
- Score Ganho: O score ganho é acumulativo de pontos registros a partir da soma das durações dos nanos concluídos.
- Quando ganho ponto ?
    - Quando um nano é finalizado com duração inferior a 24h (pontos zerados sobre o nano).
    - Quando um nano é finalizado com a duração inferior a estimada existe um bonus sobre os pontos do nano.
    - Quando um nano é finalizado com duração real igual ou com 1h inferior a estimada o ganho de pontos é dobrado.
    - Tarefas com maior prioridade tem valor maior de pontos ao concluir
- Quando deixo de ganhar ponto?
    - Quando um nano é finalizado com duração superior a 24h (pontos do nano é zerado).
    - Quando um nano é finalizado com a duração superior a estimada.
    - Tarefas com maior prioridade entregues fora do prazo tem valor menor de pontos ao concluir

**Score calculo**

- Calculo de pontos de um nano finalizado de forma padrão dentro das 24h.
    - Score = (Duração real / Duração estimada) * 100
- Calculo de pontos de um nano finalizado com duração real inferior a estimada com tempo de diferenção superior a 1h, sendo duração real inferior a estimada.
    - Score = (Duração real / Duração estimada) * 100 + 20
- Calculo de pontos de nano finalizado com bonus. Se duração real menos a duração estimada for menor ou igual que 1h, sendo duração real inferior a estimada.
    - Score = ((Duração real / Duração estimada) * 100) + ((Duração real / Duração estimada) * 100)
- Ao terminar qualquer tarefa é somando ao final do calculo o valor dos pontos obtidos da priorização da tarefa quando terminada dentro do prazo.
    - Score = Score + Prioridade
- Ao terminar qualquer tarefa é subtraido ao final do calculo a metade dos pontos obtidos da priorização da tarefa quando terminada fora do prazo.
    - Score = Score - (Prioridade / 2)

**Level**

- O level do usário é de acordo com os pontos que ele acumula dentro de um ciclo.
- Level 1: 0 - 200 pontos
- Level 2: 201 - 400 pontos
- Level 3: 401 - 600 pontos
- Level 4: 601 - 800 pontos
- Level 5: 801 ou mais pontos

**Ciclo**

- O ciclo é um período de 30 dias que o usuário tem para acumular pontos e subir de level.

**Ordenação**

As Tarefas são ordenadas de acordo com a prioridade e a data de criação.
Sendo assim quanto maior o valor dado no calculo de prioridade maior a posição da tarefa na lista.
