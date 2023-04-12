export interface UserEntity{
    id?:string;
    username?:string|undefined;
    password:string;
    email:string;

}

export interface UserTaskEntity{
    id?:string;
    username:string;
    allExp:number;
    workoutExp:number;
    learningExp:number;
    nutritionExp:number;
    recreationExp:number;
    hobbyExp:number;
    workoutTask:string;
    learningTask:string;
    nutritionTask:string;
    recreationTask:string;
    hobbyTask:string;
    idTasks:number;
}

export interface UserExpWorkout{
    id?:string;
    username:string;
    allExp:number;
    workoutExp:number;
    workoutTask:string;
    idTasks:number;
}

export interface UserExpLearnig{
    id?:string;
    username:string;
    allExp:number;
    learningExp:number;
    learningTask:string;
}

export interface UserExpNutrition{
    id?:string;
    username:string;
    allExp:number;
    learningExp:number;
    learningTask:string;
}
