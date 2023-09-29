import { describe, expect, it } from "bun:test";
import { faker } from '@faker-js/faker';
import { Nano } from "../../../src/Domain/Entities/Nano";

describe('Testes para a entidade Nano', () => {
  it('Deve criar uma nova instancia com os valores passados', () => {
    const id = faker.string.uuid();
    const userId = faker.string.uuid();
    const taskId = faker.string.uuid();
    const description = faker.lorem.sentence();
    const estimatedHours = faker.number.float();
    const plannedStart = faker.date.recent();
    const createdAt = new Date();
    const updatedAt = new Date();
    const exceededDays = false;
    const priorityScore = faker.number.int();
    const completionPercentage = faker.number.int();

    const nano = new Nano(
      id,
      userId,
      taskId,
      description,
      estimatedHours,
      plannedStart,
      createdAt,
      updatedAt,
      exceededDays,
      priorityScore,
      completionPercentage
    );

    expect(nano.id).toBe(id);
    expect(nano.user_id).toBe(userId);
    expect(nano.task_id).toBe(taskId);
    expect(nano.description).toBe(description);
    expect(nano.estimated_hours).toBe(estimatedHours);
    expect(nano.planned_start).toBe(plannedStart);
    expect(nano.created_at).toBe(createdAt);
    expect(nano.updated_at).toBe(updatedAt);
    expect(nano.exceeded_days).toBe(exceededDays);
    expect(nano.priority_score).toBe(priorityScore);
    expect(nano.completion_percentage).toBe(completionPercentage);
  });
});
