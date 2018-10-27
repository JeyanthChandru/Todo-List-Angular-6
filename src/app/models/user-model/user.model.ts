export interface User {
    name: string,
    password: string,
    todo?: Array<string>,
    completed_todo?: Array<string>
}