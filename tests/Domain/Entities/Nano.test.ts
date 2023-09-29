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
    expect(nano.userId).toBe(userId);
    expect(nano.taskId).toBe(taskId);
    expect(nano.description).toBe(description);
    expect(nano.estimatedHours).toBe(estimatedHours);
    expect(nano.plannedStart).toBe(plannedStart);
    expect(nano.createdAt).toBe(createdAt);
    expect(nano.updatedAt).toBe(updatedAt);
    expect(nano.exceededDays).toBe(exceededDays);
    expect(nano.priorityScore).toBe(priorityScore);
    expect(nano.completionPercentage).toBe(completionPercentage);
  });
});
