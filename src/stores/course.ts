import {defineStore} from 'pinia'

export interface Course {
    id: number
    name: string
}

interface CourseState {
    courses: Course[]
}

export const useCourseStore = defineStore({
    id: 'course',
    state: (): CourseState => {
        return {
            courses: [
                {
                    id: 0,
                    name: "versionhallinta"
                },
                {
                    id: 1,
                    name: "java"
                },
                {
                    id: 2,
                    name: "ruotsi"
                },
                {
                    id: 3,
                    name: "ohjelmointi 1"
                }
            ],
        }
    },
    getters: {
        all: (state) => state.courses
    },
    actions: {
        increment() {
            //this.counter++
        }
    }
})
