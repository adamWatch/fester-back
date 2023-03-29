export interface UserEntity{
    id?:string;
    username:string;
    password:string;
    email:string;

}

export interface UserTaskEntity{
    id:string;
    username:string;
    allExp:number;
    workoutExp:number;
    learningExp:number;
    nutritionExp:number;
    recreationExp:number;
    hobbyExp:number;
    workoutTask:JSON;
    learningTask:JSON;
    nutritionTask:JSON;
    recreationTask:JSON;
    hobbyTask:JSON;
}
