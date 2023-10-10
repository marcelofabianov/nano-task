// Nano
interface Nano {
    id: string;
    user_id: string;
    task_id: string;
    description: string;
    estimated_hours: number;
    real_hours?: number | null;
    planned_start: Date;
    started_at?: Date | null;
    paused_at?: Date | null;
    finished_at?: Date | null;
    canceled_at?: Date | null;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
    exceeded_days: boolean;
    priority_score: number;
    completion_percentage: number;
}

// Nano History
interface NanoHistory {
    id: string;
    nano_id: string;
    user_id: string;
    action: string;
    created_at: Date;
}

// Task
interface Task {
    id: string;
    user_id: string;
    project_id: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
    canceled_at?: Date | null;
    finished_at?: Date | null;
    priority_score: number;
    completion_percentage: number;
}

// Task History
interface TaskHistory {
    id: string;
    task_id: string;
    user_id: string;
    action: string;
    created_at: Date;
}

// Project
interface Project {
    id: string;
    user_id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
    canceled_at?: Date | null;
}

// Score
interface Score {
    id: string;
    user_id: string;
    cycle_id: string;
    selected_date: Date;
    points_won: number;
    points_lost: number;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
}

// Cycle
interface Cycle {
    id: string;
    user_id: string;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
    canceled_at?: Date | null;
}

// User
interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
    inactivated_at?: Date | null;
}

// Level
interface Level {
    id: string;
    name: string;
    level: number;
    milestone_points: number;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
}

// User Level
interface UserLevel {
    id: string;
    user_id: string;
    level_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
}