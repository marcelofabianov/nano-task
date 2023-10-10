# Entidades

## Nano

- **id**: `string` `required` Identificador único
- **user_id**: `string` `required` Identificador do criador do Nano
- **task_id**: `string` `required` Identificador da tarefa que o Nano pertence
- **description**: `string` `required` Descrição da atividade
- **estimated_hours**: `number` `required` Horas planejadas para a atividade
- **real_hours**: `number` `nullable` Horas reais gastas na atividade
- **planned_start**: `date` `required` Data de início planejada
- **started_at**: `date` `nullable` Data e hora que a atividade iniciou
- **paused_at**: `date` `nullable` Data e hora que a atividade foi pausada
- **finished_at**: `date` `nullable` Data e hora que a atividade foi finalizada
- **canceled_at**: `date` `nullable` Data e hora que a atividade foi cancelada
- **created_at**: `date` `required` Data e hora que a atividade foi criada
- **updated_at**: `date` `required` Data e hora que a atividade foi atualizada
- **deleted_at**: `date` `nullable` Data e hora que a atividade foi deletada
- **exceeded_days**: `boolean` `required` `default:false` Indica se a atividade excedeu o prazo de 24h da estimativa
- **priority_score**: `number` `required` `default:0` Pontuação de prioridade da atividade
- **completion_percentage**: `number` `required` `default:0` Porcentagem de conclusão da atividade

## Nano History

- **id**: `string` `required` Identificador único
- **nano_id**: `string` `required` Identificador do Nano
- **user_id**: `string` `required` Identificador do usuário que realizou a ação
- **action**: `string` `required` Ação realizada
- **created_at**: `date` `required` Data e hora que a atividade foi criada

## Task

- **id**: `string` `required` Identificador único
- **user_id**: `string` `required` Identificador do criador da tarefa
- **project_id**: `string` `required` Identificador do projeto que a tarefa pertence
- **description**: `string` `required` Descrição da tarefa
- **created_at**: `date` `required` Data e hora que a tarefa foi criada
- **updated_at**: `date` `required` Data e hora que a tarefa foi atualizada
- **deleted_at**: `date` `nullable` Data e hora que a tarefa foi deletada
- **cancelled_at**: `date` `nullable` Data e hora que a tarefa foi cancelada
- **finished_at**: `date` `nullable` Data e hora que a tarefa foi finalizada
- **priority_score**: `number` `required` `default:0` Pontuação de prioridade da tarefa
- **completion_percentage**: `number` `required` `default:0` Porcentagem de conclusão da tarefa

## Task History

- **id**: `string` `required` Identificador único
- **task_id**: `string` `required` Identificador da tarefa
- **user_id**: `string` `required` Identificador do usuário que realizou a ação
- **action**: `string` `required` Ação realizada
- **created_at**: `date` `required` Data e hora que a atividade foi criada

## Project

- **id**: `string` `required` Identificador único
- **user_id**: `string` `required` Identificador do criador do projeto
- **name**: `string` `required` Nome do projeto
- **description**: `string` `required` Descrição do projeto
- **created_at**: `date` `required` Data e hora que o projeto foi criado
- **updated_at**: `date` `required` Data e hora que o projeto foi atualizado
- **deleted_at**: `date` `nullable` Data e hora que o projeto foi deletado
- **canceled_at**: `date` `nullable` Data e hora que o projeto foi cancelado

## Score

- **id**: `string` `required` Identificador único
- **user_id**: `string` `required` Identificador do usuário
- **cycle_id**: `string` `required` Identificador do ciclo
- **selected_date**: `date` `required` Data selecionada para o score
- **points_won**: `number` `required` Pontos ganhos no dia
- **points_lost**: `number` `required` Pontos perdidos no dia
- **created_at**: `date` `required` Data e hora que o score foi criado
- **updated_at**: `date` `required` Data e hora que o score foi atualizado
- **deleted_at**: `date` `nullable` Data e hora que o score foi deletado

## Cycle

- **id**: `string` `required` Identificador único
- **user_id**: `string` `required` Identificador do usuário
- **name**: `string` `required` Nome do ciclo
- **description**: `string` `required` Descrição do ciclo
- **start_date**: `date` `required` Data de início do ciclo
- **end_date**: `date` `required` Data de término do ciclo
- **created_at**: `date` `required` Data e hora que o ciclo foi criado
- **updated_at**: `date` `required` Data e hora que o ciclo foi atualizado
- **deleted_at**: `date` `nullable` Data e hora que o ciclo foi deletado
- **canceled_at**: `date` `nullable` Data e hora que o ciclo foi cancelado

## User

- **id**: `string` `required` Identificador único
- **name**: `string` `required` Nome do usuário
- **email**: `string` `required` E-mail do usuário
- **password**: `string` `required` Senha do usuário
- **created_at**: `date` `required` Data e hora que o usuário foi criado
- **updated_at**: `date` `required` Data e hora que o usuário foi atualizado
- **deleted_at**: `date` `nullable` Data e hora que o usuário foi deletado
- **inactivated_at**: `date` `nullable` Data e hora que o usuário foi inativado

## Level

- **id**: `string` `required` Identificador único
- **name**: `string` `required` Nome do nível
- **level**: `number` `required` Nível
- **milestone_points**: `number` `required` Pontos necessários para atingir o nível
- **created_at**: `date` `required` Data e hora que o nível foi criado
- **updated_at**: `date` `required` Data e hora que o nível foi atualizado
- **deleted_at**: `date` `nullable` Data e hora que o nível foi deletado

## User Level

- **id**: `string` `required` Identificador único
- **user_id**: `string` `required` Identificador do usuário
- **level_id**: `string` `required` Identificador do nível
- **created_at**: `date` `required` Data e hora que o usuário atingiu o nível
- **updated_at**: `date` `required` Data e hora que o usuário foi atualizado
- **deleted_at**: `date` `nullable` Data e hora que o usuário foi deletado
